
// Simple implementation without dependencies
export const useToast = () => {
  return {
    toast: (message) => {
      console.log("Toast:", message);
    }
  };
};

export const toast = (message) => {
  console.log("Toast:", message);
};
