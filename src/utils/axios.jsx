import axios from "axios";

const instance=axios.create({
    baseURL:"https://api.themoviedb.org/3",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjI5MmE3NGIzYjcyOGQxNGYwNjI4MmFjMGQ3ZmRhMyIsInN1YiI6IjY2M2M4ZjY2ODQyZGFlMTY3M2ZhMzdiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fWHlAHmywo0SzaLCX37j_AcAoVo1ju3aGqYgzA9O9J0'
      }
});

export default instance;