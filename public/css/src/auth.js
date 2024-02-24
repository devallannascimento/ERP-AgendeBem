import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Suas configurações do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAyTn-kdrwzuNvgvtFtNF01ZARfKNywclo",
  authDomain: "agendebem-d26d6.firebaseapp.com",
  projectId: "agendebem-d26d6",
  storageBucket: "agendebem-d26d6.appspot.com",
  messagingSenderId: "1010551605726",
  appId: "1:1010551605726:web:a1f47471134af939fb754f",
  measurementId: "G-8E795PRZJD"
};

// Inicializa o aplicativo Firebase
const app = initializeApp(firebaseConfig);

// Obtém uma instância do serviço de autenticação
const auth = getAuth(app);

// Função para lidar com o envio do formulário de login
const handleLogin = async (event) => {
  event.preventDefault(); // Impede o envio padrão do formulário

  const email = document.getElementById("emailInput").value;
  const password = document.getElementById("passwordInput").value;

  try {
    // Tenta fazer o login do usuário
    await signInWithEmailAndPassword(auth, email, password);

    // Login bem-sucedido:
    // Redirecione o usuário para a página inicial ou faça o que for necessário
    console.log("Login efetuado com sucesso!");
    // Exemplo de redirecionamento:
    // window.location.href = "index.html";

  } catch (error) {
    // Falha no login:
    // Exibe uma mensagem de erro para o usuário
    console.error("Erro de login:", error);
    // Exemplo de exibição de mensagem de erro:
    // const errorElement = document.getElementById("error-message");
    // errorElement.textContent = error.message;
  }
};

// Anexe o manipulador de login ao formulário
const loginForm = document.querySelector("form");
loginForm.addEventListener("submit", handleLogin);
