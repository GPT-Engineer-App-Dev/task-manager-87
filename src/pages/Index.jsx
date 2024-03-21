import React, { useState } from "react";
import { Box, Heading, VStack, Input, IconButton, List, ListItem, ListIcon, useToast } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const toast = useToast();

  const addTodo = () => {
    if (!inputValue.trim()) {
      toast({
        title: "No text entered.",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addTodo();
    }
  };

  return (
    <Box p={5}>
      <VStack spacing={4}>
        <Heading mb={6}>Todo App</Heading>
        <Box display="flex">
          <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Add a task..." onKeyPress={handleKeyPress} />
          <IconButton icon={<FaPlus />} ml={2} onClick={addTodo} aria-label="Add todo" />
        </Box>
        <List w="full">
          {todos.map((todo, index) => (
            <ListItem key={index} display="flex" justifyContent="space-between" alignItems="center" p={2} borderWidth="1px" borderRadius="md" boxShadow="md">
              <Box flex="1">{todo}</Box>
              <IconButton icon={<FaTrash />} onClick={() => deleteTodo(index)} aria-label="Delete todo" size="sm" variant="ghost" />
            </ListItem>
          ))}
        </List>
      </VStack>
    </Box>
  );
};

export default Index;
