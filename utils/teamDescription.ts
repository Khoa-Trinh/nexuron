export default (jobId: string, role: string) => {
  switch (jobId) {
    case "marketing":
      switch (role) {
        case "member":
          return {
            title: "Thành viên Ban Kinh Tế và Marketing",
            deadline: "02/06/2025",
            description: [
              {
                title: "Mục đích của Ban Kinh Tế và Marketing",
                description: [
                  "As a Marketing Member, you will be responsible for promoting our products and engaging with our audience.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Create marketing campaigns",
                  "Engage with the community",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Create marketing campaigns",
                  "Engage with the community",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Create marketing campaigns",
                  "Engage with the community",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Create marketing campaigns",
                  "Engage with the community",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "What is your experience in marketing?",
                  "How do you handle negative feedback?",
                ],
                isQuestion: true,
              },
            ],
            function: "Marketing",
            position: "Member",
          };

        case "vice":
          return {
            title: "Phó ban Kinh Tế và Marketing",
            deadline: "02/06/2025",
            description: [
              {
                title: "Mục đích của Ban Kinh Tế và Marketing",
                description: [
                  "As a Marketing Vice, you will be responsible for leading the marketing team and developing strategies to promote our products.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Lead the marketing team",
                  "Develop marketing strategies",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "What is your experience in leading a team?",
                  "How do you measure the success of a marketing campaign?",
                ],
                isQuestion: true,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Create marketing campaigns",
                  "Engage with the community",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Create marketing campaigns",
                  "Engage with the community",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "What is your experience in marketing?",
                  "How do you handle negative feedback?",
                ],
                isQuestion: true,
              },
            ],
            function: "Marketing",
            position: "Vice",
          };
        case "head":
          return {
            title: "Trưởng ban Kinh Tế và Marketing",
            deadline: "02/06/2025",
            description: [
              {
                title: "Mục đích của Ban Kinh Tế và Marketing",
                description: [
                  "As a Marketing Head, you will be responsible for overseeing the entire marketing department and ensuring that all marketing efforts align with the company's goals.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Oversee the marketing department",
                  "Ensure alignment with company goals",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "What is your experience in leading a department?",
                  "How do you measure the success of a marketing strategy?",
                ],
                isQuestion: true,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Create marketing campaigns",
                  "Engage with the community",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Create marketing campaigns",
                  "Engage with the community",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "What is your experience in overseeing a department?",
                  "How do you ensure alignment with company goals?",
                ],
                isQuestion: true,
              },
            ],
            function: "Marketing",
            position: "Head",
          };
      }
      break;
    case "game":
      switch (role) {
        case "member":
          return {
            title: "Thành viên Ban Lập trình Game",
            deadline: "02/06/2025",
            description: [
              {
                title: "Mục đích của Ban Lập trình Game",
                description: [
                  "As a Game Member, you will be responsible for designing and producing engaging game-dev experiences.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: ["Design game mechanics", "Produce game assets"],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Create game mechanics",
                  "Produce game assets",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Create game mechanics",
                  "Produce game assets",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Create game mechanics",
                  "Produce game assets",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "What is your experience in game design?",
                  "How do you handle creative differences?",
                ],
                isQuestion: true,
              },
            ],
            function: "Game",
            position: "Member",
          };
        case "vice":
          return {
            title: "Phó ban Lập trình Game",
            deadline: "02/06/2025",
            description: [
              {
                title: "Mục đích của Ban Lập trình Game",
                description: [
                  "As a Game Vice, you will be responsible for leading the game development team and ensuring that all game projects are completed on time and to a high standard.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Lead the game development team",
                  "Ensure project completion on time",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Lead the game development team",
                  "Ensure project completion on time",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Create game mechanics",
                  "Produce game assets",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Create game mechanics",
                  "Produce game assets",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "What is your experience in leading a game development team?",
                  "How do you ensure project completion on time?",
                ],
                isQuestion: true,
              },
            ],
            function: "Game",
            position: "Vice",
          };
        case "head":
          return {
            title: "Trưởng ban Lập trình Game",
            deadline: "02/06/2025",
            description: [
              {
                title: "Mục đích của Ban Lập trình Game",
                description: [
                  "As a Game Head, you will be responsible for overseeing the entire game development department and ensuring that all game projects align with the company's goals.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Oversee the game development department",
                  "Ensure alignment with company goals",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Oversee the game development department",
                  "Ensure alignment with company goals",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Create game mechanics",
                  "Produce game assets",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Create game mechanics",
                  "Produce game assets",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "What is your experience in overseeing a game development department?",
                  "How do you ensure alignment with company goals?",
                ],
                isQuestion: true,
              },
            ],
            position: "Head",
          };
      }
      break;
    case "cybersecurity-web":
      switch (role) {
        case "member":
          return {
            title: "Thành viên Ban An Ninh Mạng dành cho Website",
            deadline: "02/06/2025",
            description: [
              {
                title: "Mục đích của Ban An Ninh Mạng dành cho Website",
                description: [
                  "As a Cybersecurity Web Member, you will be responsible for hardening and monitoring web servers, APIs, and front-ends.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Monitor web servers for vulnerabilities",
                  "Implement security measures for APIs",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Monitor web servers for vulnerabilities",
                  "Implement security measures for APIs",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Monitor web servers for vulnerabilities",
                  "Implement security measures for APIs",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Monitor web servers for vulnerabilities",
                  "Implement security measures for APIs",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "What is your experience in web security?",
                  "How do you handle security breaches?",
                ],
                isQuestion: true,
              },
            ],
            function: "Cybersecurity",
            position: "Member",
          };
        case "vice":
          return {
            title: "Phó ban An Ninh Mạng dành cho Website",
            deadline: "02/06/2025",
            description: [
              {
                title: "Mục đích của Ban An Ninh Mạng dành cho Website",
                description: [
                  "As a Cybersecurity Web Vice, you will be responsible for leading the web security team and developing strategies to protect our web applications.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Lead the web security team",
                  "Develop security strategies for web applications",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Lead the web security team",
                  "Develop security strategies for web applications",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Monitor web servers for vulnerabilities",
                  "Implement security measures for APIs",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Monitor web servers for vulnerabilities",
                  "Implement security measures for APIs",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "What is your experience in leading a web security team?",
                  "How do you measure the success of a security strategy?",
                ],
                isQuestion: true,
              },
            ],
            function: "Cybersecurity",
            position: "Vice",
          };
        case "head":
          return {
            title: "Trưởng ban An Ninh Mạng dành cho Website",
            deadline: "02/06/2025",
            description: [
              {
                title: "Mục đích của Ban An Ninh Mạng dành cho Website",
                description: [
                  "As a Cybersecurity Web Head, you will be responsible for overseeing the entire web security department and ensuring that all web security efforts align with the company's goals.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Oversee the web security department",
                  "Ensure alignment with company goals",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Oversee the web security department",
                  "Ensure alignment with company goals",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Monitor web servers for vulnerabilities",
                  "Implement security measures for APIs",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Monitor web servers for vulnerabilities",
                  "Implement security measures for APIs",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "What is your experience in overseeing a web security department?",
                  "How do you ensure alignment with company goals?",
                ],
                isQuestion: true,
              },
            ],
            function: "Cybersecurity",
            position: "Head",
          };
      }
      break;
    case "cybersecurity-app":
      switch (role) {
        case "member":
          return {
            title: "Thành viên Ban An Ninh Mạng dành cho Ứng dụng",
            deadline: "02/06/2025",
            description: [
              {
                title: "Mục đích của Ban An Ninh Mạng dành cho Ứng dụng",
                description: [
                  "As a Cybersecurity App Member, you will be responsible for securing mobile and desktop applications against exploits.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Secure mobile applications",
                  "Implement security measures for desktop applications",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Secure mobile applications",
                  "Implement security measures for desktop applications",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Secure mobile applications",
                  "Implement security measures for desktop applications",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Secure mobile applications",
                  "Implement security measures for desktop applications",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "What is your experience in app security?",
                  "How do you handle security vulnerabilities?",
                ],
                isQuestion: true,
              },
            ],
            function: "Cybersecurity",
            position: "Member",
          };
        case "vice":
          return {
            title: "Phó ban An Ninh Mạng dành cho Ứng dụng",
            deadline: "02/06/2025",
            description: [
              {
                title: "Mục đích của Ban An Ninh Mạng dành cho Ứng dụng",
                description: [
                  "As a Cybersecurity App Vice, you will be responsible for leading the app security team and developing strategies to protect our applications.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Lead the app security team",
                  "Develop security strategies for applications",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Lead the app security team",
                  "Develop security strategies for applications",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Secure mobile applications",
                  "Implement security measures for desktop applications",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Secure mobile applications",
                  "Implement security measures for desktop applications",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "What is your experience in leading an app security team?",
                  "How do you measure the success of an app security strategy?",
                ],
                isQuestion: true,
              },
            ],
            function: "Cybersecurity",
            position: "Vice",
          };
        case "head":
          return {
            title: "Trưởng ban An Ninh Mạng dành cho Ứng dụng",
            deadline: "02/06/2025",
            description: [
              {
                title: "Mục đích của Ban An Ninh Mạng dành cho Ứng dụng",
                description: [
                  "As a Cybersecurity App Head, you will be responsible for overseeing the entire app security department and ensuring that all app security efforts align with the company's goals.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Oversee the app security department",
                  "Ensure alignment with company goals",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Oversee the app security department",
                  "Ensure alignment with company goals",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Secure mobile applications",
                  "Implement security measures for desktop applications",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Secure mobile applications",
                  "Implement security measures for desktop applications",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "What is your experience in overseeing an app security department?",
                  "How do you ensure alignment with company goals?",
                ],
                isQuestion: true,
              },
            ],
            function: "Cybersecurity",
            position: "Head",
          };
      }
      break;
    case "ai-ml":
      switch (role) {
        case "member":
          return {
            title: "Thành viên ban AI - Machine Learning",
            deadline: "02/06/2025",
            description: [
              {
                title: "Mục đích của Ban AI - Machine Learning",
                description: [
                  "As an AI ML Member, you will be responsible for researching and implementing novel machine-learning algorithms.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Research machine learning algorithms",
                  "Implement machine learning models",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Research machine learning algorithms",
                  "Implement machine learning models",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Research machine learning algorithms",
                  "Implement machine learning models",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Research machine learning algorithms",
                  "Implement machine learning models",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "What is your experience in machine learning?",
                  "How do you handle data preprocessing?",
                ],
                isQuestion: true,
              },
            ],
            function: "AI",
            position: "Member",
          };
        case "vice":
          return {
            title: "Phó ban AI - Machine Learning",
            deadline: "02/06/2025",
            description: [
              {
                title: "Mục đích của Ban AI - Machine Learning",
                description: [
                  "As an AI ML Vice, you will be responsible for leading the machine learning team and developing strategies to implement machine learning models.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Lead the machine learning team",
                  "Develop machine learning strategies",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Lead the machine learning team",
                  "Develop machine learning strategies",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Research machine learning algorithms",
                  "Implement machine learning models",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Research machine learning algorithms",
                  "Implement machine learning models",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "What is your experience in leading a machine learning team?",
                  "How do you measure the success of a machine learning model?",
                ],
                isQuestion: true,
              },
            ],
            function: "AI",
            position: "Vice",
          };
        case "head":
          return {
            title: "Trưởng ban AI - Machine Learning",
            deadline: "02/06/2025",
            description: [
              {
                title: "Mục đích của Ban AI - Machine Learning",
                description: [
                  "As an AI ML Head, you will be responsible for overseeing the entire machine learning department and ensuring that all machine learning efforts align with the company's goals.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Oversee the machine learning department",
                  "Ensure alignment with company goals",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Oversee the machine learning department",
                  "Ensure alignment with company goals",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Research machine learning algorithms",
                  "Implement machine learning models",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Research machine learning algorithms",
                  "Implement machine learning models",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "What is your experience in overseeing a machine learning department?",
                  "How do you ensure alignment with company goals?",
                ],
                isQuestion: true,
              },
            ],
            function: "AI",
            position: "Head",
          };
      }
      break;
    case "ai-cv":
      switch (role) {
        case "member":
          return {
            title: "Thành viên Ban AI - Computer Vision",
            deadline: "02/06/2025",
            description: [
              {
                title: "Mục đích của Ban AI - Computer Vision",
                description: [
                  "As an AI CV Member, you will be responsible for building computer-vision pipelines to interpret visual data.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Build computer vision pipelines",
                  "Implement image processing algorithms",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Build computer vision pipelines",
                  "Implement image processing algorithms",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Build computer vision pipelines",
                  "Implement image processing algorithms",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Build computer vision pipelines",
                  "Implement image processing algorithms",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "What is your experience in computer vision?",
                  "How do you handle image preprocessing?",
                ],
                isQuestion: true,
              },
            ],
            function: "AI",
            position: "Member",
          };
        case "vice":
          return {
            title: "Phó ban AI - Computer Vision",
            deadline: "02/06/2025",
            description: [
              {
                title: "Mục đích của Ban AI - Computer Vision",
                description: [
                  "As an AI CV Vice, you will be responsible for leading the computer vision team and developing strategies to implement computer vision models.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Lead the computer vision team",
                  "Develop computer vision strategies",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Lead the computer vision team",
                  "Develop computer vision strategies",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Build computer vision pipelines",
                  "Implement image processing algorithms",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Build computer vision pipelines",
                  "Implement image processing algorithms",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "What is your experience in leading a computer vision team?",
                  "How do you measure the success of a computer vision model?",
                ],
                isQuestion: true,
              },
            ],
            function: "AI",
            position: "Vice",
          };
        case "head":
          return {
            title: "Trưởng ban AI - Computer Vision",
            deadline: "02/06/2025",
            description: [
              {
                title: "Mục đích của Ban AI - Computer Vision",
                description: [
                  "As an AI CV Head, you will be responsible for overseeing the entire computer vision department and ensuring that all computer vision efforts align with the company's goals.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Oversee the computer vision department",
                  "Ensure alignment with company goals",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Oversee the computer vision department",
                  "Ensure alignment with company goals",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Build computer vision pipelines",
                  "Implement image processing algorithms",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Build computer vision pipelines",
                  "Implement image processing algorithms",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "What is your experience in overseeing a computer vision department?",
                  "How do you ensure alignment with company goals?",
                ],
                isQuestion: true,
              },
            ],
            function: "AI",
            position: "Head",
          };
      }
      break;
    case "ai-nlp":
      switch (role) {
        case "member":
          return {
            title: "Thành viên Ban AI - Natural Language Processing",
            deadline: "02/06/2025",
            description: [
              {
                title: "Mục đích của Ban AI - Natural Language Processing",
                description: [
                  "As an AI NLP Member, you will be responsible for designing natural-language models for text understanding.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Design natural language models",
                  "Implement text processing algorithms",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Design natural language models",
                  "Implement text processing algorithms",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Design natural language models",
                  "Implement text processing algorithms",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Design natural language models",
                  "Implement text processing algorithms",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "What is your experience in natural language processing?",
                  "How do you handle text preprocessing?",
                ],
                isQuestion: true,
              },
            ],
            function: "AI",
            position: "Member",
          };
        case "vice":
          return {
            title: "Phó ban AI - Natural Language Processing",
            deadline: "02/06/2025",
            description: [
              {
                title: "Mục đích của Ban AI - Natural Language Processing",
                description: [
                  "As an AI NLP Vice, you will be responsible for leading the natural language processing team and developing strategies to implement natural language models.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Lead the natural language processing team",
                  "Develop natural language processing strategies",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Lead the natural language processing team",
                  "Develop natural language processing strategies",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Design natural language models",
                  "Implement text processing algorithms",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Design natural language models",
                  "Implement text processing algorithms",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "What is your experience in leading a natural language processing team?",
                  "How do you measure the success of a natural language model?",
                ],
                isQuestion: true,
              },
            ],
            function: "AI",
            position: "Vice",
          };
        case "head":
          return {
            title: "Trưởng ban AI - Natural Language Processing",
            deadline: "02/06/2025",
            description: [
              {
                title: "Mục đích của Ban AI - Natural Language Processing",
                description: [
                  "As an AI NLP Head, you will be responsible for overseeing the entire natural language processing department and ensuring that all natural language processing efforts align with the company's goals.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Oversee the natural language processing department",
                  "Ensure alignment with company goals",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Oversee the natural language processing department",
                  "Ensure alignment with company goals",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Design natural language models",
                  "Implement text processing algorithms",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Design natural language models",
                  "Implement text processing algorithms",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "What is your experience in overseeing a natural language processing department?",
                  "How do you ensure alignment with company goals?",
                ],
                isQuestion: true,
              },
            ],
            function: "AI",
            position: "Head",
          };
      }
      break;
    case "web-frontend":
      switch (role) {
        case "member":
          return {
            title: "Thành viên Ban Frontend - Website",
            deadline: "02/06/2025",
            description: [
              {
                title: "Mục đích của Ban Frontend - Website",
                description: [
                  "As a Web Frontend Member, you will be responsible for crafting responsive, accessible user interfaces.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Develop user interfaces",
                  "Ensure accessibility standards are met",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Develop user interfaces",
                  "Ensure accessibility standards are met",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Develop user interfaces",
                  "Ensure accessibility standards are met",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Develop user interfaces",
                  "Ensure accessibility standards are met",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "What is your experience in frontend development?",
                  "How do you ensure accessibility in your designs?",
                ],
                isQuestion: true,
              },
            ],
            function: "Web",
            position: "Member",
          };
        case "vice":
          return {
            title: "Phó ban Frontend - Website",
            deadline: "02/06/2025",
            description: [
              {
                title: "Mục đích của Ban Frontend - Website",
                description: [
                  "As a Web Frontend Vice, you will be responsible for leading the frontend team and developing strategies to create user-friendly interfaces.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Lead the frontend team",
                  "Develop frontend strategies",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Lead the frontend team",
                  "Develop frontend strategies",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Develop user interfaces",
                  "Ensure accessibility standards are met",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Develop user interfaces",
                  "Ensure accessibility standards are met",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "What is your experience in leading a frontend team?",
                  "How do you measure the success of a frontend project?",
                ],
                isQuestion: true,
              },
            ],
            function: "Web",
            position: "Vice",
          };
        case "head":
          return {
            title: "Trưởng ban Frontend - Website",
            deadline: "02/06/2025",
            description: [
              {
                title: "Mục đích của Ban Frontend - Website",
                description: [
                  "As a Web Frontend Head, you will be responsible for overseeing the entire frontend department and ensuring that all frontend efforts align with the company's goals.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Oversee the frontend department",
                  "Ensure alignment with company goals",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Oversee the frontend department",
                  "Ensure alignment with company goals",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Develop user interfaces",
                  "Ensure accessibility standards are met",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Develop user interfaces",
                  "Ensure accessibility standards are met",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "What is your experience in overseeing a frontend department?",
                  "How do you ensure alignment with company goals?",
                ],
                isQuestion: true,
              },
            ],
            function: "Web",
            position: "Head",
          };
      }
      break;
    case "web-backend":
      switch (role) {
        case "member":
          return {
            title: "Thành viên Ban Backend - Website",
            deadline: "02/06/2025",
            description: [
              {
                title: "Mục đích của Ban Backend - Website",
                description: [
                  "As a Web Backend Member, you will be responsible for building scalable APIs, databases, and server-side logic.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: ["Develop APIs", "Implement server-side logic"],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Develop APIs",
                  "Implement server-side logic",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Build scalable APIs",
                  "Implement server-side logic",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Build scalable APIs",
                  "Implement server-side logic",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "What is your experience in backend development?",
                  "How do you ensure scalability in your designs?",
                ],
                isQuestion: true,
              },
            ],
            function: "Web",
            position: "Member",
          };
        case "vice":
          return {
            title: "Phó ban Backend - Website",
            deadline: "02/06/2025",
            description: [
              {
                title: "Mục đích của Ban Backend - Website",
                description: [
                  "As a Web Backend Vice, you will be responsible for leading the backend team and developing strategies to create scalable APIs.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Lead the backend team",
                  "Develop backend strategies",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Lead the backend team",
                  "Develop backend strategies",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Build scalable APIs",
                  "Implement server-side logic",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Build scalable APIs",
                  "Implement server-side logic",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "What is your experience in leading a backend team?",
                  "How do you measure the success of a backend project?",
                ],
                isQuestion: true,
              },
            ],
            function: "Web",
            position: "Vice",
          };
        case "head":
          return {
            title: "Trưởng ban Backend - Website",
            deadline: "02/06/2025",
            description: [
              {
                title: "Mục đích của Ban Backend - Website",
                description: [
                  "As a Web Backend Head, you will be responsible for overseeing the entire backend department and ensuring that all backend efforts align with the company's goals.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Oversee the backend department",
                  "Ensure alignment with company goals",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Oversee the backend department",
                  "Ensure alignment with company goals",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Build scalable APIs",
                  "Implement server-side logic",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Build scalable APIs",
                  "Implement server-side logic",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "What is your experience in overseeing a backend department?",
                  "How do you ensure alignment with company goals?",
                ],
                isQuestion: true,
              },
            ],
            function: "Web",
            position: "Head",
          };
      }
      break;
    case "web-ui_ux":
      switch (role) {
        case "member":
          return {
            title: "Thành viên Ban UI/UX - Website",
            deadline: "02/06/2025",
            description: [
              {
                title: "Mục đích của Ban UI/UX - Website",
                description: [
                  "As a Web UI/UX Member, you will be responsible for designing intuitive flows and wireframes for web apps.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Design user flows",
                  "Create wireframes for web applications",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Design user flows",
                  "Create wireframes for web applications",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Design intuitive flows",
                  "Create wireframes for web applications",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Design intuitive flows",
                  "Create wireframes for web applications",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "What is your experience in UI/UX design?",
                  "How do you handle user feedback?",
                ],
                isQuestion: true,
              },
            ],
            function: "Web",
            position: "Member",
          };
        case "vice":
          return {
            title: "Phó ban UI/UX - Website",
            deadline: "02/06/2025",
            description: [
              {
                title: "Mục đích của Ban UI/UX - Website",
                description: [
                  "As a Web UI/UX Vice, you will be responsible for leading the UI/UX team and developing strategies to create user-friendly designs.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Lead the UI/UX team",
                  "Develop UI/UX strategies",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Lead the UI/UX team",
                  "Develop UI/UX strategies",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Design intuitive flows",
                  "Create wireframes for web applications",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Design intuitive flows",
                  "Create wireframes for web applications",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "What is your experience in leading a UI/UX team?",
                  "How do you measure the success of a design project?",
                ],
                isQuestion: true,
              },
            ],
            function: "Web",
            position: "Vice",
          };
        case "head":
          return {
            title: "Trưởng ban UI/UX - Website",
            deadline: "02/06/2025",
            description: [
              {
                title: "Mục đích của Ban UI/UX - Website",
                description: [
                  "As a Web UI/UX Head, you will be responsible for overseeing the entire UI/UX department and ensuring that all UI/UX efforts align with the company's goals.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Oversee the UI/UX department",
                  "Ensure alignment with company goals",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Oversee the UI/UX department",
                  "Ensure alignment with company goals",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Design intuitive flows",
                  "Create wireframes for web applications",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Design intuitive flows",
                  "Create wireframes for web applications",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "What is your experience in overseeing a UI/UX department?",
                  "How do you ensure alignment with company goals?",
                ],
                isQuestion: true,
              },
            ],
            function: "Web",
            position: "Head",
          };
      }
      break;
    case "app-desktop":
      switch (role) {
        case "member":
          return {
            title: "Thành viên Ban App - Desktop",
            deadline: "02/06/2025",
            description: [
              {
                title: "Mục đích của Ban App - Desktop",
                description: [
                  "As an App Desktop Member, you will be responsible for developing cross-platform desktop applications.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Develop cross-platform desktop applications",
                  "Implement user interfaces for desktop apps",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Develop cross-platform desktop applications",
                  "Implement user interfaces for desktop apps",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Develop cross-platform desktop applications",
                  "Implement user interfaces for desktop apps",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Develop cross-platform desktop applications",
                  "Implement user interfaces for desktop apps",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "What is your experience in desktop application development?",
                  "How do you handle cross-platform compatibility?",
                ],
                isQuestion: true,
              },
            ],
            function: "App",
            position: "Member",
          };
        case "vice":
          return {
            title: "Phó ban App - Desktop",
            deadline: "02/06/2025",
            description: [
              {
                title: "Mục đích của Ban App - Desktop",
                description: [
                  "As an App Desktop Vice, you will be responsible for leading the desktop application team and developing strategies to create cross-platform applications.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Lead the desktop application team",
                  "Develop desktop application strategies",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Lead the desktop application team",
                  "Develop desktop application strategies",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Develop cross-platform desktop applications",
                  "Implement user interfaces for desktop apps",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Develop cross-platform desktop applications",
                  "Implement user interfaces for desktop apps",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "What is your experience in leading a desktop application team?",
                  "How do you measure the success of a desktop application project?",
                ],
                isQuestion: true,
              },
            ],
            function: "App",
            position: "Vice",
          };
        case "head":
          return {
            title: "Trưởng ban App - Desktop",
            deadline: "02/06/2025",
            description: [
              {
                title: "Mục đích của Ban App - Desktop",
                description: [
                  "As an App Desktop Head, you will be responsible for overseeing the entire desktop application department and ensuring that all desktop application efforts align with the company's goals.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Oversee the desktop application department",
                  "Ensure alignment with company goals",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Oversee the desktop application department",
                  "Ensure alignment with company goals",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Develop cross-platform desktop applications",
                  "Implement user interfaces for desktop apps",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Develop cross-platform desktop applications",
                  "Implement user interfaces for desktop apps",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "What is your experience in overseeing a desktop application department?",
                  "How do you ensure alignment with company goals?",
                ],
                isQuestion: true,
              },
            ],
            function: "App",
            position: "Head",
          };
      }
      break;
    case "app-embedded":
      switch (role) {
        case "member":
          return {
            title: "Thành viên Ban App - Embedded",
            deadline: "02/06/2025",
            description: [
              {
                title: "Mục đích của Ban App - Embedded",
                description: [
                  "As an App Embedded Member, you will be responsible for writing firmware and control code for embedded devices.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Write firmware for embedded devices",
                  "Implement control code for hardware components",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Write firmware for embedded devices",
                  "Implement control code for hardware components",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Write firmware for embedded devices",
                  "Implement control code for hardware components",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Write firmware for embedded devices",
                  "Implement control code for hardware components",
                ],
                isQuestion: false,
              },
              {
                title: "Questions",
                description: [
                  "What is your experience in embedded systems development?",
                  "How do you handle hardware-software integration?",
                ],
                isQuestion: true,
              },
            ],
            function: "App",
            position: "Member",
          };
        case "vice":
          return {
            title: "Phó ban App - Embedded",
            deadline: "02/06/2025",
            description: [
              {
                title: "Mục đích của Ban App - Embedded",
                description: [
                  "As an App Embedded Vice, you will be responsible for leading the embedded systems team and developing strategies to create firmware for embedded devices.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Lead the embedded systems team",
                  "Develop embedded systems strategies",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Lead the embedded systems team",
                  "Develop embedded systems strategies",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Write firmware for embedded devices",
                  "Implement control code for hardware components",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Write firmware for embedded devices",
                  "Implement control code for hardware components",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "What is your experience in leading an embedded systems team?",
                  "How do you measure the success of an embedded systems project?",
                ],
                isQuestion: true,
              },
            ],
            function: "App",
            position: "Vice",
          };
        case "head":
          return {
            title: "Trưởng ban App - Embedded",
            deadline: "02/06/2025",
            description: [
              {
                title: "Mục đích của Ban App - Embedded",
                description: [
                  "As an App Embedded Head, you will be responsible for overseeing the entire embedded systems department and ensuring that all embedded systems efforts align with the company's goals.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Oversee the embedded systems department",
                  "Ensure alignment with company goals",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Oversee the embedded systems department",
                  "Ensure alignment with company goals",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Write firmware for embedded devices",
                  "Implement control code for hardware components",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Write firmware for embedded devices",
                  "Implement control code for hardware components",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "What is your experience in overseeing an embedded systems department?",
                  "How do you ensure alignment with company goals?",
                ],
                isQuestion: true,
              },
            ],
            function: "App",
            position: "Head",
          };
      }
      break;
    default:
      return { title: jobId };
  }
};
