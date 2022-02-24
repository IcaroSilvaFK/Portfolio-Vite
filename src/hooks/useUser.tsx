import { useQuery } from "react-query";
import { api } from "../services";

interface UserGit {
  name: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  created_at: string;
}

export function useUser() {
  const { data, isFetching } = useQuery<UserGit>(
    "user.Github",
    async () => {
      const response = await api.get("IcaroSilvaFK");
      return response.data;
    },
    {
      refetchOnWindowFocus: false,
      staleTime: 60 * 60 * 24, //one day
    }
  );
  return { data, isFetching };
}
