import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Alert, FlatList } from "react-native";
import styled from "styled-components/native";
import Header from "../src/components/header/header";
import Task from "../src/components/task/task";
import TaskModal from "../src/components/modal/newTask/newTaskModal";
import { Button } from "../src/components/button/button";
import AddTask from "../assets/image/createTask.svg";
import SearchIcon from "../assets/image/search.svg";
import TaskList from "../src/components/task/taskList";
import Empty from "../src/components/task/empty";
import ErrorModal from "../src/components/modal/errorApi/errorApi";
import api from "../src/services/axiosInstance";
import Search from "../src/components/header/search"; 
import {Icon, SearchArea } from "../src/components/header/header"

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]); 
  const [error, setError] = useState(false);
  const [filterText, setFilterText] = useState("");  

  interface Task {
    id: string;
    task: string;
    completed: boolean | string;
  }

  const fetchTasks = async () => {
    try {
      const response = await api.get<Task[]>("/tarefas");

      const tasksFormatted = response.data.map((task: Task) => ({
        id: task.id,
        task: task.task,
        completed: task.completed === "true" || task.completed === true,
      }));

      setTasks(tasksFormatted);
      setFilteredTasks(tasksFormatted); 
      setError(false);
    } catch (error) {
      console.error("Erro ao buscar tarefas:", error);
      setError(true);
    }
  };

  const handleAddTask = async (task: { id?: string; task: string }) => {
    try {
      if (task.id) {
        await api.put(`/tarefas/${task.id}`, {
          task: task.task,
          completed: false,
        });
      } else {
        await api.post("/tarefas", {
          task: task.task,
          completed: false,
        });
      }
      fetchTasks();
    } catch (error) {
      Alert.alert("Erro", "Não foi possível adicionar ou editar a tarefa.");
    }
  };

  const handleRetry = () => {
    setError(false);
    fetchTasks();
  };

  const handleSearch = (text: string) => {
    setFilterText(text); 
    if (text === "") {
      setFilteredTasks(tasks);
    } else {
      const filtered = tasks.filter(
        (task) => task.task.toLowerCase().includes(text.toLowerCase()) 
      );
      setFilteredTasks(filtered);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleOpenModal = () => setModalVisible(true);
  const handleCloseModal = () => setModalVisible(false);

  return (
    <Container>
      <Header />
      <SearchArea>
        <Search onSearch={handleSearch} /> 
        <Icon>
          <SearchIcon />
        </Icon>
      </SearchArea>

     
      <Content>
        <Task
          tasksCreated={tasks.length}
          tasksCompleted={tasks.filter((task) => task.completed).length}
        />
        {filteredTasks.length > 0 ? (
          <FlatList
            data={filteredTasks}  
            renderItem={({ item }) => (
              <TaskList key={item.id} task={item} onTaskUpdate={fetchTasks} />
            )}
            keyExtractor={(item) => item.id.toString()}
            initialNumToRender={10}
          />
        ) : (
          <Empty />
        )}
      </Content>
      <ErrorModal
        visible={error}
        onRetry={handleRetry}
        onClose={() => setError(false)}
      />
      <FloatingButton>
        <Button
          width={"100%"}
          height={52}
          style={{ position: "absolute", bottom: 16, right: 16 }}
          onPress={handleOpenModal}
        >
          <StyledTitle>Criar</StyledTitle>
          <AddTask />
        </Button>
      </FloatingButton>
      <TaskModal
        visible={modalVisible}
        onClose={handleCloseModal}
        onTaskSubmit={handleAddTask}
      />
    </Container>
  );
}

const Container = styled(SafeAreaView)`
  flex: 1;
  position: relative;
`;

const Content = styled(View)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.gray[100]};
`;

const FloatingButton = styled(View)`
  position: absolute;
  bottom: 60px;
  right: 20px;
  width: 25%;
  align-items: flex-end;
`;

const StyledTitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.inter.bold};
  color: ${(props) => props.theme.colors.gray[100]};
  margin-right: 8px;
`;
