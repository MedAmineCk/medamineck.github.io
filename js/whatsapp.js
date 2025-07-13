class WhatsAppWidget {
  constructor() {
    this.timeouts = []
    this.phoneNumber = "212620108495";
    this.isPopupOpen = false;
    this.messagesContainer = document.getElementById("chatMessages");
    this.messageInput = document.getElementById("messageInput");
    this.messageForm = document.getElementById("messageForm");
    this.whatsappTrigger = document.getElementById("whatsappTrigger");
    this.whatsappPopup = document.getElementById("whatsappPopup");
    this.closeBtn = document.getElementById("closeBtn");
    this.init();
  }

  init() {
    this.bindEvents();
    this.loadProfileImage();
  }

  bindEvents() {
    this.whatsappTrigger.addEventListener("click", () => {
    this.whatsappTrigger.classList.toggle("active"); 
    this.togglePopup();
  });

    this.closeBtn.addEventListener("click", () => {
      this.closePopup();
    });

    this.messageForm.addEventListener("submit", (e) => {
      this.handleFormSubmit(e);
    });

    document.addEventListener("click", (e) => {
      if (this.isPopupOpen && !this.whatsappPopup.contains(e.target) && !this.whatsappTrigger.contains(e.target)) {
        this.closePopup();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.isPopupOpen) {
        this.closePopup();
      }
    });
  }

  loadProfileImage() {
    const profileImg = document.getElementById("profileImg");
    profileImg.src = "/img/profile.png";
  }

  togglePopup() {
    if (this.isPopupOpen) {
      this.closePopup();
    } else {
      this.openPopup();
    }
  }

  openPopup() {
    this.whatsappPopup.classList.add("show");
    this.isPopupOpen = true;
    this.messageInput.focus();
    this.startAutomatedSequence();
  }

  closePopup() {
      this.whatsappPopup.classList.remove("show");
      this.whatsappTrigger.classList.remove("active"); // remove active class
      this.isPopupOpen = false;
      this.clearTimeouts();
      this.messagesContainer.innerHTML = "";
    }




  startAutomatedSequence() {
  this.clearTimeouts(); // clear previous timeouts
  this.messagesContainer.innerHTML = "";

  this.timeouts.push(setTimeout(() => {
    const currentTime = this.getCurrentTime();
    this.addMessage("Hi 👋", "received", currentTime);
  }, 500));

  this.timeouts.push(setTimeout(() => {
    const currentTime = this.getCurrentTime();
    this.addMessage("How can I help you?", "received", currentTime);
  }, 1000));

  this.timeouts.push(setTimeout(() => {
    this.showTypingIndicator();
  }, 3000));

  this.timeouts.push(setTimeout(() => {
    const currentTime = this.getCurrentTime();
    this.hideTypingIndicator();
    this.addMessage(
      "Feel free to reach out with any questions about a project, service, collaboration, or even a job opportunity — I'm here to help!",
      "received",
      currentTime
    );
  }, 6000));
}
startAutomatedSequence() {
  this.clearTimeouts(); // clear previous timeouts
  this.messagesContainer.innerHTML = "";

  this.timeouts.push(setTimeout(() => {
    const currentTime = this.getCurrentTime();
    this.addMessage("Hi 👋", "received", currentTime);
  }, 500));

  this.timeouts.push(setTimeout(() => {
    const currentTime = this.getCurrentTime();
    this.addMessage("How can I help you?", "received", currentTime);
  }, 1000));

  this.timeouts.push(setTimeout(() => {
    this.showTypingIndicator();
  }, 3000));

  this.timeouts.push(setTimeout(() => {
    const currentTime = this.getCurrentTime();
    this.hideTypingIndicator();
    this.addMessage(
      "Feel free to reach out with any questions about a project, service, collaboration, or even a job opportunity — I'm here to help!",
      "received",
      currentTime
    );
  }, 6000));

  this.timeouts.push(setTimeout(() => {
    this.showTypingIndicator()
  }, 7000))

  this.timeouts.push(setTimeout(() => {
  const currentTime = this.getCurrentTime();
  this.hideTypingIndicator();

  // Create button HTML
  const buttonHtml = `
    <div style="margin-top: 5px;">
      <button onclick="window.open('https://wa.me/${this.phoneNumber}', '_blank')" style="
        background-color: #25D366;
        color: white;
        border: none;
        padding: 8px 12px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 14px;
      ">💬 Continue on WhatsApp</button>
    </div>
  `;

  this.addMessage(
    `✅ Just one more step!<br>Click below to start chatting on WhatsApp with me.${buttonHtml}`,
    "received",
    currentTime
  );
}, 9000));

}


  addMessage(text, type, time) {
    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${type}`;
    messageDiv.innerHTML = `
      <div class="message-bubble">
        ${text}
      </div>
      <div class="message-time">${time}</div>
    `;
    this.messagesContainer.appendChild(messageDiv);
    this.scrollToBottom();
  }

  showTypingIndicator() {
    const typingDiv = document.createElement("div");
    typingDiv.className = "message received";
    typingDiv.id = "typingIndicator";
    typingDiv.innerHTML = `
      <div class="typing-indicator">
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
      </div>
    `;
    this.messagesContainer.appendChild(typingDiv);
    this.scrollToBottom();
  }

  hideTypingIndicator() {
    const typingIndicator = document.getElementById("typingIndicator");
    if (typingIndicator) {
      typingIndicator.remove();
    }
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const message = this.messageInput.value.trim();
    if (!message) return;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${this.phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
    this.messageInput.value = "";
    const currentTime = this.getCurrentTime();
    this.addMessage(message, "sent", currentTime);
  }

  scrollToBottom() {
    this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
  }

  getCurrentTime() {
    return new Date().toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  clearTimeouts() {
  this.timeouts.forEach(t => clearTimeout(t))
  this.timeouts = []
}

}

document.addEventListener("DOMContentLoaded", () => {
  new WhatsAppWidget();
});
