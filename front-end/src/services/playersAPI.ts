import axiosInstance from "./axios";

export const addPlayer = 

     async (playerData: {
    name: string;
    age: number;
    country: string;
    main_role: string;
    batting: string;
    balling: string;
  }) => {
    const response = await axiosInstance.post("/player/addPlayer", playerData);
    return response.data;
  } 
 