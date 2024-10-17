export async function ApiStore() {
  const data = await fetch(
    "https://www.googleapis.com/books/v1/volumes?q=flowers&key=AIzaSyCMJuD0M5F1ZMIDKg1eiYjVZ2EHp1cr6_k"
  );
  const result = await data.json();
  return result;
}
