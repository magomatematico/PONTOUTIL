// Importando Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Config do Firebase (a sua que o console gerou)
const firebaseConfig = {
  apiKey: "AIzaSyBkh-Is_r0BwuQcnEW1lzIAxS49q3ZkJIc",
  authDomain: "ponto-util-51954.firebaseapp.com",
  projectId: "ponto-util-51954",
  storageBucket: "ponto-util-51954.firebasestorage.app",
  messagingSenderId: "349199654027",
  appId: "1:349199654027:web:4defbd961856b2e9d6488e",
  measurementId: "G-T3JVXWSBJN"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Função para salvar
async function salvarUsuario(nome, idade) {
  await addDoc(collection(db, "usuarios"), {
    nome,
    idade,
    criadoEm: new Date()
  });
  console.log("Usuário salvo!");
}

// Função para carregar
async function carregarUsuarios() {
  const querySnapshot = await getDocs(collection(db, "usuarios"));
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
}

// Expor funções pro HTML conseguir chamar
window.salvarUsuario = salvarUsuario;
window.carregarUsuarios = carregarUsuarios;
