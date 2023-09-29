export const Register = async (data) => {
    console.log(data);
    const useData = await axios.post("http://localhost:5000/users/register", {
      data,
      ContentType: "application/json",
      Accept: "application/json",
    });
    console.log(useData);
    if (useData.data.status === 201) {
      window.location.href = "/login";
    }else{
      window.location.href = "/register"
    }
  };