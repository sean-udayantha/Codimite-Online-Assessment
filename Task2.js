async function getCustomer(){
    const result= await axios.get('http//localhost:8080/api/TotalSpentCustomer');   
}

try {
  const test= getCustomer();
} catch (error) {
    console.log("🚀 ~ error:", error)   
}