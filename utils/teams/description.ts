export default (jobId: string, role: string) => {
  switch (jobId) {
    case "marketing-and-economy":
      switch (role) {
        case "member":
          return {
            title: "Thành viên Ban Kinh Tế và Marketing",
            deadline: "02/06/2025",
            description: [
              {
                title: "Mục đích của Ban Kinh Tế và Marketing",
                description: [
                  "Với vai trò là thành viên Ban Kinh Tế và Marketing, bạn sẽ chịu trách nhiệm quảng bá các sản phẩm của nhóm và tương tác với cộng đồng.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Lên ý tưởng và triển khai các chiến dịch truyền thông, quảng bá sản phẩm/dự án của nhóm.",
                  "Thu thập, phân tích phản hồi từ cộng đồng để đề xuất cải tiến hoạt động truyền thông.",
                  "Viết bài, thiết kế nội dung truyền thông (bài đăng, poster, video ngắn, v.v.).",
                  "Báo cáo kết quả các chiến dịch marketing cho trưởng ban/phó ban.",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Học sinh là thành viên của lớp chuyên tin niên khóa 2024-2027 hoặc các niên khóa từ 2025 trở đi",
                  "Đảm bảo thời gian đồng hành cùng tổ chức ít nhất 12 tháng",
                  "Nhiệt tình, chủ động, linh hoạt, sáng tạo và có tinh thần trách nhiệm cao",
                  "Có khả năng giao tiếp, báo cáo hiệu quả, chủ động",
                  "Có khả năng làm việc dưới áp lực và khả năng quản trị cảm xúc tốt",
                  "Có tính tỉ mỉ, cẩn thận cao",
                  "Có khả năng tìm kiếm, nghiên cứu và chắt lọc thông tin tốt",
                  "Có sự nhạy bén trong ngôn ngữ",
                  "Có thể dành 4 – 5 tiếng làm việc trong tuần, 2 – 3 tiếng cuối tuần cho các buổi họp triển khai công việc và làm việc liên ban",
                  "Biết sử dụng các công cụ tiện ích, chẳng hạn như Google Drive, Microsoft Word, Google Docs, Google Sheets",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Có kiến thức cơ bản về marketing, truyền thông hoặc kinh tế.",
                  "Có kinh nghiệm quản lý hoặc phát triển các kênh mạng xã hội (Facebook, Instagram, Tiktok, v.v.)",
                  "Biết sử dụng các công cụ thiết kế (Canva, Photoshop, v.v.)",
                  "Ưu tiên ứng viên từng tham gia các dự án truyền thông, marketing hoặc có sản phẩm thực tế.",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Mỗi thành viên được sử dụng một tên miền <tên-thành-viên>.nexuron.dev",
                  "Được tham gia vào các dự án lớn",
                  "Tất cả các dự án nếu tham gia đều được cho phép đưa vào CV",
                  "Được hỗ trợ bởi các chuyên gia trong lĩnh vực",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "Bạn nghĩ sao về cách marketing của Nexuron?",
                  "Nếu bạn được đầu tư 10 triệu đồng để quảng bá một sản phẩm công nghệ nhưng mang tính cộng đồng của Nexuron, quy trình của bạn bắt đầu từ đâu (ví dụ như đi từ nền tảng nào, quảng cáo ra sao tiếp cận tệp khách hàng nào, v.v)?",
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
                  "Với vai trò là thành viên Ban Kinh Tế và Marketing, bạn sẽ chịu trách nhiệm quảng bá các sản phẩm của nhóm và tương tác với cộng đồng.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Hỗ trợ Trưởng ban trong việc xây dựng và triển khai chiến lược marketing, phát triển thương hiệu cho nhóm.",
                  "Quản lý, phân công và giám sát công việc của các thành viên trong ban.",
                  "Đánh giá hiệu quả các chiến dịch marketing, tổng hợp và báo cáo kết quả cho Trưởng ban.",
                  "Đào tạo, hướng dẫn các thành viên mới về kỹ năng marketing, truyền thông.",
                  "Hỗ trợ giải quyết các vấn đề phát sinh trong quá trình triển khai công việc của ban.",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Học sinh là thành viên của lớp chuyên tin niên khóa 2024-2027 hoặc các niên khóa từ 2025 trở đi",
                  "Đảm bảo thời gian đồng hành cùng tổ chức ít nhất 12 tháng",
                  "Nhiệt tình, chủ động, linh hoạt, sáng tạo và có tinh thần trách nhiệm cao",
                  "Có khả năng giao tiếp, báo cáo hiệu quả, chủ động",
                  "Có khả năng làm việc dưới áp lực và khả năng quản trị cảm xúc tốt",
                  "Có tính tỉ mỉ, cẩn thận cao",
                  "Có khả năng tìm kiếm, nghiên cứu và chắt lọc thông tin tốt",
                  "Có sự nhạy bén trong ngôn ngữ",
                  "Có thể dành 4 – 5 tiếng làm việc trong tuần, 2 – 3 tiếng cuối tuần cho các buổi họp triển khai công việc và làm việc liên ban",
                  "Biết sử dụng các công cụ tiện ích, chẳng hạn như Google Drive, Microsoft Word, Google Docs, Google Sheets",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Có kỹ năng lãnh đạo, đào tạo và hướng dẫn thành viên mới.",
                  "Có kinh nghiệm lập kế hoạch và triển khai các chiến dịch marketing thực tế.",
                  "Có khả năng phân tích dữ liệu, đánh giá hiệu quả các chiến dịch truyền thông.",
                  "Có kiến thức về SEO, SEM, Google Analytics và các công cụ marketing trực tuyến.",
                  "Ưu tiên ứng viên từng giữ vai trò quản lý hoặc trưởng nhóm trong các dự án truyền thông, marketing hoặc có sản phẩm thực tế.",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Mỗi thành viên được sử dụng một tên miền <tên-thành-viên>.nexuron.dev",
                  "Được tham gia vào các dự án lớn",
                  "Tất cả các dự án nếu tham gia đều được cho phép đưa vào CV",
                  "Được hỗ trợ bởi các chuyên gia trong lĩnh vực",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "Phân tích tại sao dự án TempurAI tuy sản phẩm tốt nhưng lại thất bại trong việc marketing?",
                  "Nếu Trưởng ban và các Thành viên không cùng một ý tưởng về cách marketing cho một sản phẩm, bạn sẽ làm gì?",
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
                  "Với vai trò là thành viên Ban Kinh Tế và Marketing, bạn sẽ chịu trách nhiệm quảng bá các sản phẩm của nhóm và tương tác với cộng đồng.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Xây dựng và định hướng chiến lược marketing, phát triển thương hiệu cho tổ chức.",
                  "Quản lý, điều phối toàn bộ hoạt động của ban Kinh tế & Marketing.",
                  "Chủ trì các cuộc họp, tổng hợp và báo cáo kết quả hoạt động marketing cho Ban lãnh đạo.",
                  "Đại diện ban làm việc với các bộ phận khác trong tổ chức.",
                  "Giải quyết các vấn đề phát sinh, đảm bảo các hoạt động marketing diễn ra hiệu quả và đúng tiến độ.",
                  "Đánh giá, cải tiến quy trình làm việc và đề xuất các giải pháp đổi mới sáng tạo cho ban.",
                  "Đào tạo, truyền cảm hứng và phát triển năng lực cho các thành viên trong ban.",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Học sinh là thành viên của lớp chuyên tin niên khóa 2024-2027 hoặc các niên khóa từ 2025 trở đi",
                  "Đảm bảo thời gian đồng hành cùng tổ chức ít nhất 12 tháng",
                  "Nhiệt tình, chủ động, linh hoạt, sáng tạo và có tinh thần trách nhiệm cao",
                  "Có khả năng giao tiếp, báo cáo hiệu quả, chủ động",
                  "Có khả năng làm việc dưới áp lực và khả năng quản trị cảm xúc tốt",
                  "Có tính tỉ mỉ, cẩn thận cao",
                  "Có khả năng tìm kiếm, nghiên cứu và chắt lọc thông tin tốt",
                  "Có sự nhạy bén trong ngôn ngữ",
                  "Có thể dành 4 – 5 tiếng làm việc trong tuần, 2 – 3 tiếng cuối tuần cho các buổi họp triển khai công việc và làm việc liên ban",
                  "Biết sử dụng các công cụ tiện ích, chẳng hạn như Google Drive, Microsoft Word, Google Docs, Google Sheets",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Có kiến thức chuyên sâu về marketing, truyền thông, kinh tế và quản trị thương hiệu.",
                  "Có kỹ năng lãnh đạo, quản lý đội nhóm và đào tạo phát triển nhân sự.",
                  "Thành thạo lập kế hoạch chiến lược, phân tích thị trường và đánh giá hiệu quả hoạt động marketing.",
                  "Ưu tiên ứng viên từng giữ vai trò trưởng ban hoặc quản lý cấp cao trong các dự án truyền thông, marketing hoặc có sản phẩm thực tế.",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Mỗi thành viên được sử dụng một tên miền <tên-thành-viên>.nexuron.dev",
                  "Được tham gia vào các dự án lớn",
                  "Tất cả các dự án nếu tham gia đều được cho phép đưa vào CV",
                  "Được hỗ trợ bởi các chuyên gia trong lĩnh vực",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "Bạn có thể chia sẻ một chiến dịch marketing mà bạn đã thực hiện thành công không?",
                  "Trường hợp thành viên có mâu thuẫn & việc đột xuất, không thể theo kịp tiến độ, bạn sẽ làm gì?",
                  "Nếu bạn có một ý tưởng marketing nhưng không được sự đồng thuận của các thành viên trong ban, bạn sẽ làm gì?",
                ],
                isQuestion: true,
              },
            ],
            function: "Marketing",
            position: "Head",
          };
        default:
          throw createError({
            statusCode: 404,
            statusMessage: "Not Found",
            message: "Không tìm thấy thông tin về ban này",
          });
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
                  "Thiết kế trò chơi, cốt truyện và mang những trò chơi đó đến với cộng đồng (ví dụ như itch.io), làm nền tảng cho các bạn trẻ yêu thích lập trình game.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Tham gia lên ý tưởng, xây dựng kịch bản và thiết kế gameplay cho các dự án game của nhóm.",
                  "Tham gia phát triển các sản phẩm game, từ giai đoạn ý tưởng đến hoàn thiện.",
                  "Thiết kế, chỉnh sửa và tích hợp các tài nguyên game (hình ảnh, âm thanh, hiệu ứng...).",
                  "Kiểm thử, sửa lỗi và tối ưu hiệu năng cho sản phẩm game.",
                  "Viết tài liệu hướng dẫn sử dụng, tài liệu kỹ thuật cho game.",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Học sinh là thành viên của lớp chuyên tin niên khóa 2024-2027 hoặc các niên khóa từ 2025 trở đi",
                  "Đảm bảo thời gian đồng hành cùng tổ chức ít nhất 12 tháng",
                  "Nhiệt tình, chủ động, linh hoạt, sáng tạo và có tinh thần trách nhiệm cao",
                  "Có khả năng giao tiếp, báo cáo hiệu quả, chủ động",
                  "Có khả năng làm việc dưới áp lực và khả năng quản trị cảm xúc tốt",
                  "Có tính tỉ mỉ, cẩn thận cao",
                  "Có khả năng tìm kiếm, nghiên cứu và chắt lọc thông tin tốt",
                  "Có sự nhạy bén trong ngôn ngữ",
                  "Có thể dành 4 – 5 tiếng làm việc trong tuần, 2 – 3 tiếng cuối tuần cho các buổi họp triển khai công việc và làm việc liên ban",
                  "Biết sử dụng các công cụ tiện ích, chẳng hạn như Google Drive, Microsoft Word, Google Docs, Google Sheets",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Có kiến thức cơ bản về lập trình game (ví dụ: Pygame, Unity, Godot, Unreal Engine, Cocos hoặc các framework game khác).",
                  "Biết sử dụng ít nhất một ngôn ngữ lập trình (C#, Python, JavaScript, v.v.) phục vụ phát triển game.",
                  "Hiểu biết về các nguyên lý thiết kế gameplay, kịch bản, cân bằng game.",
                  "Có khả năng làm việc nhóm, phối hợp với các thành viên khác (lập trình, thiết kế, âm thanh...).",
                  "Biết sử dụng github",
                  "Ưu tiên ứng viên từng tham gia các dự án game hoặc có sản phẩm game cá nhân.",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Mỗi thành viên được sử dụng một tên miền <tên-thành-viên>.nexuron.dev",
                  "Được tham gia vào các dự án lớn",
                  "Tất cả các dự án nếu tham gia đều được cho phép đưa vào CV",
                  "Được hỗ trợ bởi các chuyên gia trong lĩnh vực",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "Theo bạn, trong đợt làm dự án game vừa rồi của thầy Hoàng Anh, dự án nào là dự án thành công nhất? Tại sao?",
                  "Bạn có thể chia sẻ một dự án game mà bạn đã tham gia không? Bạn đã đóng góp gì cho dự án đó?",
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
                  "Thiết kế trò chơi, cốt truyện và mang những trò chơi đó đến với cộng đồng (ví dụ như itch.io), làm nền tảng cho các bạn trẻ yêu thích lập trình game.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Hỗ trợ Trưởng ban trong việc xây dựng kế hoạch và định hướng phát triển các dự án game của nhóm.",
                  "Quản lý, phân công và giám sát tiến độ công việc của các thành viên trong ban.",
                  "Tham gia trực tiếp vào quá trình phát triển, kiểm thử và tối ưu game.",
                  "Đào tạo, hướng dẫn các thành viên mới về quy trình phát triển game, công nghệ và công cụ sử dụng trong dự án.",
                  "Báo cáo tiến độ, kết quả công việc cho Trưởng ban và đề xuất các phương án xử lý khi có vấn đề phát sinh.",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Học sinh là thành viên của lớp chuyên tin niên khóa 2024-2027 hoặc các niên khóa từ 2025 trở đi",
                  "Đảm bảo thời gian đồng hành cùng tổ chức ít nhất 12 tháng",
                  "Nhiệt tình, chủ động, linh hoạt, sáng tạo và có tinh thần trách nhiệm cao",
                  "Có khả năng giao tiếp, báo cáo hiệu quả, chủ động",
                  "Có khả năng làm việc dưới áp lực và khả năng quản trị cảm xúc tốt",
                  "Có tính tỉ mỉ, cẩn thận cao",
                  "Có khả năng tìm kiếm, nghiên cứu và chắt lọc thông tin tốt",
                  "Có sự nhạy bén trong ngôn ngữ",
                  "Có thể dành 4 – 5 tiếng làm việc trong tuần, 2 – 3 tiếng cuối tuần cho các buổi họp triển khai công việc và làm việc liên ban",
                  "Biết sử dụng các công cụ tiện ích, chẳng hạn như Google Drive, Microsoft Word, Google Docs, Google Sheets",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Có kinh nghiệm phát triển game thực tế với các engine như Pygame, Unity, Godot, Unreal Engine, Cocos hoặc các framework game khác.",
                  "Thành thạo ít nhất một ngôn ngữ lập trình phục vụ phát triển game (C#, Python, JavaScript, v.v.).",
                  "Có khả năng thiết kế, xây dựng và tối ưu gameplay, kịch bản, cân bằng game.",
                  "Có kỹ năng quản lý nhóm, phân công và giám sát tiến độ công việc.",
                  "Biết sử dụng github",
                  "Có khả năng đào tạo, hướng dẫn thành viên mới về quy trình, công nghệ và công cụ phát triển game.",
                  "Ưu tiên ứng viên từng giữ vai trò quản lý hoặc trưởng nhóm trong các dự án game hoặc có sản phẩm game cá nhân.",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Mỗi thành viên được sử dụng một tên miền <tên-thành-viên>.nexuron.dev",
                  "Được tham gia vào các dự án lớn",
                  "Tất cả các dự án nếu tham gia đều được cho phép đưa vào CV",
                  "Được hỗ trợ bởi các chuyên gia trong lĩnh vực",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "Bạn thấy dự án game của Cao Minh Quốc Thái có điểm gì đặc biệt, về cách thiết kế engine, cách viết cốt truyện, nhân vật, tạo gameplay, cách nhóm chia ra làm task, ... ?",
                  "Bạn có thể chia sẻ một dự án game mà bạn đã tham gia không? Bạn đã đóng góp gì cho dự án đó?",
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
                  "Thiết kế trò chơi, cốt truyện và mang những trò chơi đó đến với cộng đồng (ví dụ như itch.io), làm nền tảng cho các bạn trẻ yêu thích lập trình game.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Xây dựng và định hướng chiến lược phát triển cho Ban Lập trình Game, đảm bảo phù hợp với mục tiêu chung của tổ chức.",
                  "Quản lý, điều phối toàn bộ hoạt động của ban, phân công nhiệm vụ và giám sát tiến độ các dự án game.",
                  "Chủ trì các cuộc họp, tổng hợp và báo cáo kết quả hoạt động của ban cho Ban lãnh đạo.",
                  "Đại diện ban làm việc với các bộ phận khác trong tổ chức.",
                  "Giải quyết các vấn đề phát sinh, đảm bảo các hoạt động phát triển game diễn ra hiệu quả và đúng tiến độ.",
                  "Đào tạo, truyền cảm hứng và phát triển năng lực cho các thành viên trong ban.",
                  "Đánh giá, cải tiến quy trình làm việc và đề xuất các giải pháp đổi mới sáng tạo cho ban.",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Học sinh là thành viên của lớp chuyên tin niên khóa 2024-2027 hoặc các niên khóa từ 2025 trở đi",
                  "Đảm bảo thời gian đồng hành cùng tổ chức ít nhất 12 tháng",
                  "Nhiệt tình, chủ động, linh hoạt, sáng tạo và có tinh thần trách nhiệm cao",
                  "Có khả năng giao tiếp, báo cáo hiệu quả, chủ động",
                  "Có khả năng làm việc dưới áp lực và khả năng quản trị cảm xúc tốt",
                  "Có tính tỉ mỉ, cẩn thận cao",
                  "Có khả năng tìm kiếm, nghiên cứu và chắt lọc thông tin tốt",
                  "Có sự nhạy bén trong ngôn ngữ",
                  "Có thể dành 4 – 5 tiếng làm việc trong tuần, 2 – 3 tiếng cuối tuần cho các buổi họp triển khai công việc và làm việc liên ban",
                  "Biết sử dụng các công cụ tiện ích, chẳng hạn như Google Drive, Microsoft Word, Google Docs, Google Sheets",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Có kiến thức chuyên sâu về lập trình game (Pygame, Unity, Godot, Unreal Engine, Cocos hoặc các framework game khác).",
                  "Thành thạo ít nhất một ngôn ngữ lập trình phục vụ phát triển game (C#, Python, JavaScript, v.v.).",
                  "Có kinh nghiệm xây dựng, quản lý và triển khai các dự án game thực tế.",
                  "Có khả năng thiết kế, xây dựng và tối ưu gameplay, kịch bản, cân bằng game.",
                  "Có kỹ năng lãnh đạo, quản lý đội nhóm và đào tạo phát triển nhân sự trong lĩnh vực game.",
                  "Có khả năng xây dựng chiến lược phát triển sản phẩm, phân tích thị trường và đánh giá hiệu quả dự án game.",
                  "Biết sử dụng github",
                  "Ưu tiên ứng viên từng giữ vai trò trưởng ban hoặc quản lý cấp cao trong các dự án game hoặc có sản phẩm game cá nhân.",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Mỗi thành viên được sử dụng một tên miền <tên-thành-viên>.nexuron.dev",
                  "Được tham gia vào các dự án lớn",
                  "Tất cả các dự án nếu tham gia đều được cho phép đưa vào CV",
                  "Được hỗ trợ bởi các chuyên gia trong lĩnh vực",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "Với dự án game của Cao Minh Quốc Thái, nếu bạn là trưởng dự án, bạn sẽ làm gì để cải thiện dự án?",
                  "Game là một sản phẩm giải trí, nhưng cũng có thể là một công cụ giáo dục. Bạn nghĩ sao về điều này?",
                  "Vì tính chất của ngành, sẽ thế nào nếu các thành viên của bạn không hoàn thành nhiệm vụ đúng hạn? Bạn sẽ làm gì?",
                  "Nếu bạn có một ý tưởng game nhưng không được sự đồng thuận của các thành viên trong ban, bạn sẽ làm gì?",
                ],
                isQuestion: true,
              },
            ],
            position: "Head",
          };
        default:
          throw createError({
            statusCode: 404,
            statusMessage: "Not Found",
            message: "Không tìm thấy thông tin về ban này",
          });
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
                  "Bạn sẽ chịu trách nhiệm tăng cường bảo mật và giám sát các máy chủ web, API và giao diện người dùng (frontend).",
                  "Tham dự các cuộc thi trên ctftime, viết các bài blog trên hackmd, săn bounty (nếu đủ khả năng).",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Tham gia giám sát, phát hiện và xử lý các lỗ hổng bảo mật trên máy chủ web, API và giao diện người dùng.",
                  "Đề xuất và triển khai các biện pháp bảo mật cho hệ thống website, API.",
                  "Kiểm tra, đánh giá mức độ an toàn của các thành phần web (frontend, backend, API).",
                  "Tham gia vào các cuộc thi bảo mật, viết blog",
                  "Cập nhật kiến thức về các lỗ hổng, xu hướng tấn công và công nghệ bảo mật mới.",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Học sinh là thành viên của lớp chuyên tin niên khóa 2024-2027 hoặc các niên khóa từ 2025 trở đi",
                  "Đảm bảo thời gian đồng hành cùng tổ chức ít nhất 12 tháng",
                  "Nhiệt tình, chủ động, linh hoạt, sáng tạo và có tinh thần trách nhiệm cao",
                  "Có khả năng giao tiếp, báo cáo hiệu quả, chủ động",
                  "Có khả năng làm việc dưới áp lực và khả năng quản trị cảm xúc tốt",
                  "Có tính tỉ mỉ, cẩn thận cao",
                  "Có khả năng tìm kiếm, nghiên cứu và chắt lọc thông tin tốt",
                  "Có sự nhạy bén trong ngôn ngữ",
                  "Có thể dành 4 – 5 tiếng làm việc trong tuần, 2 – 3 tiếng cuối tuần cho các buổi họp triển khai công việc và làm việc liên ban",
                  "Biết sử dụng các công cụ tiện ích, chẳng hạn như Google Drive, Microsoft Word, Google Docs, Google Sheets",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Có kiến thức cơ bản về bảo mật web, các lỗ hổng phổ biến (như XSS, SQL Injection, CSRF, v.v.).",
                  "Biết sử dụng các công cụ kiểm tra, đánh giá bảo mật website (Burp Suite, OWASP ZAP, v.v.).",
                  "Có khả năng đọc hiểu và phân tích mã nguồn web (HTML, JavaScript, PHP, Python, v.v.).",
                  "Hiểu về nguyên lý hoạt động của HTTP, cookies, session, authentication.",
                  "Có khả năng cập nhật kiến thức về các xu hướng tấn công và công nghệ bảo mật mới.",
                  "Biết sử dụng github",
                  "Ưu tiên ứng viên từng tham gia các cuộc thi CTF, viết blog bảo mật hoặc có sản phẩm thực tế liên quan đến bảo mật web.",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Mỗi thành viên được sử dụng một tên miền <tên-thành-viên>.nexuron.dev",
                  "Được tham gia vào các dự án lớn",
                  "Tất cả các dự án nếu tham gia đều được cho phép đưa vào CV",
                  "Được hỗ trợ bởi các chuyên gia trong lĩnh vực",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "Find the flag. nexrctf_xxxxxxxxxxxpaddingpadding",
                  "Hint: mail, code, shift, ord, digit, char, you. You will see it, everyday. (Vui lòng viết báo cáo vào hackmd và gửi link)",
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
                  "Bạn sẽ chịu trách nhiệm tăng cường bảo mật và giám sát các máy chủ web, API và giao diện người dùng (frontend).",
                  "Tham dự các cuộc thi trên ctftime, viết các bài blog trên hackmd, săn bounty (nếu đủ khả năng).",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Hỗ trợ Trưởng ban trong việc xây dựng, triển khai chiến lược bảo mật cho hệ thống web, API và frontend.",
                  "Quản lý, phân công và giám sát công việc của các thành viên trong ban.",
                  "Báo cáo tiến độ, kết quả công việc cho Trưởng ban và đề xuất các giải pháp khi có vấn đề phát sinh.",
                  "Đào tạo, hướng dẫn các thành viên mới về quy trình kiểm thử, các công cụ và kỹ thuật bảo mật web.",
                  "Tham gia vào các cuộc thi bảo mật, viết blog",
                  "Cập nhật kiến thức về các lỗ hổng, xu hướng tấn công và công nghệ bảo mật mới.",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Học sinh là thành viên của lớp chuyên tin niên khóa 2024-2027 hoặc các niên khóa từ 2025 trở đi",
                  "Đảm bảo thời gian đồng hành cùng tổ chức ít nhất 12 tháng",
                  "Nhiệt tình, chủ động, linh hoạt, sáng tạo và có tinh thần trách nhiệm cao",
                  "Có khả năng giao tiếp, báo cáo hiệu quả, chủ động",
                  "Có khả năng làm việc dưới áp lực và khả năng quản trị cảm xúc tốt",
                  "Có tính tỉ mỉ, cẩn thận cao",
                  "Có khả năng tìm kiếm, nghiên cứu và chắt lọc thông tin tốt",
                  "Có sự nhạy bén trong ngôn ngữ",
                  "Có thể dành 4 – 5 tiếng làm việc trong tuần, 2 – 3 tiếng cuối tuần cho các buổi họp triển khai công việc và làm việc liên ban",
                  "Biết sử dụng các công cụ tiện ích, chẳng hạn như Google Drive, Microsoft Word, Google Docs, Google Sheets",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Có kiến thức vững về bảo mật web, các lỗ hổng phổ biến (XSS, SQL Injection, CSRF, SSRF, v.v.).",
                  "Thành thạo sử dụng các công cụ kiểm thử, đánh giá bảo mật website (Burp Suite, OWASP ZAP, v.v.).",
                  "Có khả năng phân tích, đánh giá và xử lý các lỗ hổng bảo mật trên hệ thống web, API và frontend.",
                  "Có kinh nghiệm quản lý nhóm, phân công và giám sát tiến độ công việc liên quan đến bảo mật web.",
                  "Biết đọc hiểu, phân tích mã nguồn web (HTML, JavaScript, PHP, Python, v.v.).",
                  "Biết sử dụng github",
                  "Có khả năng đào tạo, hướng dẫn thành viên mới về quy trình kiểm thử, công cụ và kỹ thuật bảo mật web.",
                  "Có khả năng cập nhật kiến thức về các xu hướng tấn công và công nghệ bảo mật mới.",
                  "Ưu tiên ứng viên từng tham gia các cuộc thi CTF, viết blog bảo mật hoặc có sản phẩm thực tế liên quan đến bảo mật web.",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Mỗi thành viên được sử dụng một tên miền <tên-thành-viên>.nexuron.dev",
                  "Được tham gia vào các dự án lớn",
                  "Tất cả các dự án nếu tham gia đều được cho phép đưa vào CV",
                  "Được hỗ trợ bởi các chuyên gia trong lĩnh vực",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "Find the flag. nexrctf_xxxxxxxxxxxpaddingpadding",
                  "Hint: mail, code, shift, ord, digit, char, you. You will see it, everyday. (Vui lòng viết báo cáo vào hackmd và gửi link)",
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
                  "Bạn sẽ chịu trách nhiệm tăng cường bảo mật và giám sát các máy chủ web, API và giao diện người dùng (frontend).",
                  "Tham dự các cuộc thi trên ctftime, viết các bài blog trên hackmd, săn bounty (nếu đủ khả năng).",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Xây dựng và định hướng chiến lược bảo mật cho hệ thống web, API và frontend của tổ chức.",
                  "Quản lý, điều phối toàn bộ hoạt động của ban, phân công nhiệm vụ và giám sát tiến độ các dự án bảo mật web.",
                  "Chủ trì các cuộc họp, tổng hợp và báo cáo kết quả hoạt động của ban cho Ban lãnh đạo.",
                  "Đại diện ban làm việc với các bộ phận khác trong tổ chức.",
                  "Giải quyết các vấn đề phát sinh, đảm bảo các hoạt động bảo mật diễn ra hiệu quả và đúng tiến độ.",
                  "Đào tạo, truyền cảm hứng và phát triển năng lực cho các thành viên trong ban.",
                  "Đánh giá, cải tiến quy trình làm việc và đề xuất các giải pháp đổi mới sáng tạo cho ban.",
                  "Tham gia vào các cuộc thi bảo mật, viết blog",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Học sinh là thành viên của lớp chuyên tin niên khóa 2024-2027 hoặc các niên khóa từ 2025 trở đi",
                  "Đảm bảo thời gian đồng hành cùng tổ chức ít nhất 12 tháng",
                  "Nhiệt tình, chủ động, linh hoạt, sáng tạo và có tinh thần trách nhiệm cao",
                  "Có khả năng giao tiếp, báo cáo hiệu quả, chủ động",
                  "Có khả năng làm việc dưới áp lực và khả năng quản trị cảm xúc tốt",
                  "Có tính tỉ mỉ, cẩn thận cao",
                  "Có khả năng tìm kiếm, nghiên cứu và chắt lọc thông tin tốt",
                  "Có sự nhạy bén trong ngôn ngữ",
                  "Có thể dành 4 – 5 tiếng làm việc trong tuần, 2 – 3 tiếng cuối tuần cho các buổi họp triển khai công việc và làm việc liên ban",
                  "Biết sử dụng các công cụ tiện ích, chẳng hạn như Google Drive, Microsoft Word, Google Docs, Google Sheets",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Có kiến thức chuyên sâu về bảo mật web, các lỗ hổng phổ biến (XSS, SQL Injection, CSRF, SSRF, v.v.).",
                  "Thành thạo sử dụng các công cụ kiểm thử, đánh giá bảo mật website (Burp Suite, OWASP ZAP, v.v.).",
                  "Có khả năng phân tích, đánh giá và xử lý các lỗ hổng bảo mật trên hệ thống web, API và frontend.",
                  "Có kinh nghiệm xây dựng, quản lý và triển khai các dự án bảo mật web thực tế.",
                  "Có khả năng thiết kế và triển khai quy trình kiểm thử bảo mật cho hệ thống web.",
                  "Có kỹ năng lãnh đạo, quản lý đội nhóm và đào tạo phát triển nhân sự trong lĩnh vực bảo mật web.",
                  "Có khả năng xây dựng chiến lược phát triển sản phẩm, phân tích thị trường và đánh giá hiệu quả dự án bảo mật web.",
                  "Biết sử dụng github",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Mỗi thành viên được sử dụng một tên miền <tên-thành-viên>.nexuron.dev",
                  "Được tham gia vào các dự án lớn",
                  "Tất cả các dự án nếu tham gia đều được cho phép đưa vào CV",
                  "Được hỗ trợ bởi các chuyên gia trong lĩnh vực",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "Find the flag. nexrctf_xxxxxxxxxxxpaddingpadding",
                  "Hint: mail, code, shift, ord, digit, char. You will see it, everyday. (Vui lòng viết báo cáo vào hackmd và gửi link)",
                ],
                isQuestion: true,
              },
            ],
            function: "Cybersecurity",
            position: "Head",
          };
        default:
          throw createError({
            statusCode: 404,
            statusMessage: "Not Found",
            message: "Không tìm thấy thông tin về ban này",
          });
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
                  "Với vai trò là thành viên Ban An Ninh Mạng dành cho Ứng dụng, bạn sẽ chịu trách nhiệm bảo mật các ứng dụng di động và máy tính khỏi các lỗ hổng tấn công.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Đề xuất và triển khai các biện pháp bảo mật cho ứng dụng",
                  "Kiểm thử, đánh giá mức độ an toàn của các ứng dụng trước khi phát hành.",
                  "Cập nhật kiến thức về các lỗ hổng, xu hướng tấn công và công nghệ bảo mật mới.",
                  "Tham gia các cuộc thi bảo mật, viết blog chia sẻ kiến thức (nếu có khả năng).",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Học sinh là thành viên của lớp chuyên tin niên khóa 2024-2027 hoặc các niên khóa từ 2025 trở đi",
                  "Đảm bảo thời gian đồng hành cùng tổ chức ít nhất 12 tháng",
                  "Nhiệt tình, chủ động, linh hoạt, sáng tạo và có tinh thần trách nhiệm cao",
                  "Có khả năng giao tiếp, báo cáo hiệu quả, chủ động",
                  "Có khả năng làm việc dưới áp lực và khả năng quản trị cảm xúc tốt",
                  "Có tính tỉ mỉ, cẩn thận cao",
                  "Có khả năng tìm kiếm, nghiên cứu và chắt lọc thông tin tốt",
                  "Có sự nhạy bén trong ngôn ngữ",
                  "Có thể dành 4 – 5 tiếng làm việc trong tuần, 2 – 3 tiếng cuối tuần cho các buổi họp triển khai công việc và làm việc liên ban",
                  "Biết sử dụng các công cụ tiện ích, chẳng hạn như Google Drive, Microsoft Word, Google Docs, Google Sheets",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Có kiến thức cơ bản về bảo mật ứng dụng di động (Android, iOS) và ứng dụng máy tính (Windows, macOS, Linux).",
                  "Biết sử dụng các công cụ kiểm thử bảo mật ứng dụng (MobSF, Frida, Burp Suite, v.v.).",
                  "Có khả năng đọc hiểu và phân tích mã nguồn ứng dụng (Java, Kotlin, Swift, C#, Python, v.v.).",
                  "Hiểu về các lỗ hổng phổ biến trên ứng dụng như Insecure Storage, Code Injection, v.v.",
                  "Hiểu về nguyên lý hoạt động của các giao thức bảo mật (HTTPS, SSL/TLS).",
                  "Có khả năng cập nhật kiến thức về các xu hướng tấn công và công nghệ bảo mật mới.",
                  "Biết sử dụng github",
                  "Ưu tiên ứng viên từng tham gia các cuộc thi CTF, viết blog bảo mật hoặc có sản phẩm thực tế liên quan đến bảo mật ứng dụng.",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Mỗi thành viên được sử dụng một tên miền <tên-thành-viên>.nexuron.dev",
                  "Được tham gia vào các dự án lớn",
                  "Tất cả các dự án nếu tham gia đều được cho phép đưa vào CV",
                  "Được hỗ trợ bởi các chuyên gia trong lĩnh vực",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "Find the key. What you see is what you need. https://github.com/MHP0920/nexuron-cs-app-challenge",
                  "Bạn nghĩ MHPKMS có lỗ hỏng nào trong flow xử lí không? (dựa vào những gì viết trên web)",
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
                  "Với vai trò là thành viên Ban An Ninh Mạng dành cho Ứng dụng, bạn sẽ chịu trách nhiệm bảo mật các ứng dụng di động và máy tính khỏi các lỗ hổng tấn công.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Hỗ trợ Trưởng ban trong việc xây dựng, triển khai chiến lược bảo mật cho các ứng dụng di động và máy tính.",
                  "Quản lý, phân công và giám sát công việc của các thành viên trong ban.",
                  "Tham gia kiểm thử, đánh giá và xử lý các lỗ hổng bảo mật trên ứng dụng.",
                  "Đào tạo, hướng dẫn các thành viên mới về quy trình kiểm thử, công cụ và kỹ thuật bảo mật ứng dụng.",
                  "Cập nhật kiến thức về các lỗ hổng, xu hướng tấn công và công nghệ bảo mật mới.",
                  "Tham gia các cuộc thi bảo mật, viết blog chia sẻ kiến thức (nếu có khả năng).",
                  "Báo cáo tiến độ, kết quả công việc cho Trưởng ban và đề xuất các giải pháp khi có vấn đề phát sinh.",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Học sinh là thành viên của lớp chuyên tin niên khóa 2024-2027 hoặc các niên khóa từ 2025 trở đi",
                  "Đảm bảo thời gian đồng hành cùng tổ chức ít nhất 12 tháng",
                  "Nhiệt tình, chủ động, linh hoạt, sáng tạo và có tinh thần trách nhiệm cao",
                  "Có khả năng giao tiếp, báo cáo hiệu quả, chủ động",
                  "Có khả năng làm việc dưới áp lực và khả năng quản trị cảm xúc tốt",
                  "Có tính tỉ mỉ, cẩn thận cao",
                  "Có khả năng tìm kiếm, nghiên cứu và chắt lọc thông tin tốt",
                  "Có sự nhạy bén trong ngôn ngữ",
                  "Có thể dành 4 – 5 tiếng làm việc trong tuần, 2 – 3 tiếng cuối tuần cho các buổi họp triển khai công việc và làm việc liên ban",
                  "Biết sử dụng các công cụ tiện ích, chẳng hạn như Google Drive, Microsoft Word, Google Docs, Google Sheets",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Có kiến thức vững về bảo mật ứng dụng di động (Android, iOS) và ứng dụng máy tính (Windows, macOS, Linux).",
                  "Thành thạo sử dụng các công cụ kiểm thử bảo mật ứng dụng (MobSF, Frida, Burp Suite, v.v.).",
                  "Có khả năng phân tích, đánh giá và xử lý các lỗ hổng bảo mật trên ứng dụng.",
                  "Có kinh nghiệm quản lý nhóm, phân công và giám sát tiến độ công việc liên quan đến bảo mật ứng dụng.",
                  "Có khả năng đọc hiểu và phân tích mã nguồn ứng dụng (Java, Kotlin, Swift, C#, Python, v.v.).",
                  "Có khả năng thiết kế và triển khai quy trình kiểm thử bảo mật cho ứng dụng.",
                  "Có kỹ năng lãnh đạo, quản lý đội nhóm và đào tạo phát triển nhân sự trong lĩnh vực bảo mật ứng dụng.",
                  "Biết sử dụng github",
                  "Ưu tiên ứng viên từng tham gia các cuộc thi CTF, viết blog bảo mật hoặc có sản phẩm thực tế liên quan đến bảo mật ứng dụng.",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Mỗi thành viên được sử dụng một tên miền <tên-thành-viên>.nexuron.dev",
                  "Được tham gia vào các dự án lớn",
                  "Tất cả các dự án nếu tham gia đều được cho phép đưa vào CV",
                  "Được hỗ trợ bởi các chuyên gia trong lĩnh vực",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "Find the key. What you see is what you need. https://github.com/MHP0920/nexuron-cs-app-challenge",
                  "Bạn nghĩ MHPKMS có lỗ hỏng nào trong flow xử lí không? (dựa vào những gì viết trên web)",
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
                  "Với vai trò là thành viên Ban An Ninh Mạng dành cho Ứng dụng, bạn sẽ chịu trách nhiệm bảo mật các ứng dụng di động và máy tính khỏi các lỗ hổng tấn công.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Xây dựng và định hướng chiến lược bảo mật cho các ứng dụng di động và máy tính của tổ chức.",
                  "Quản lý, điều phối toàn bộ hoạt động của ban, phân công nhiệm vụ và giám sát tiến độ các dự án bảo mật ứng dụng.",
                  "Chủ trì các cuộc họp, tổng hợp và báo cáo kết quả hoạt động bảo mật cho Ban lãnh đạo.",
                  "Đại diện ban làm việc với các bộ phận khác trong tổ chức.",
                  "Giải quyết các vấn đề phát sinh, đảm bảo các hoạt động bảo mật diễn ra hiệu quả và đúng tiến độ.",
                  "Đào tạo, truyền cảm hứng và phát triển năng lực cho các thành viên trong ban.",
                  "Đánh giá, cải tiến quy trình làm việc và đề xuất các giải pháp đổi mới sáng tạo cho ban.",
                  "Tham gia vào các cuộc thi bảo mật, viết blog",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Học sinh là thành viên của lớp chuyên tin niên khóa 2024-2027 hoặc các niên khóa từ 2025 trở đi",
                  "Đảm bảo thời gian đồng hành cùng tổ chức ít nhất 12 tháng",
                  "Nhiệt tình, chủ động, linh hoạt, sáng tạo và có tinh thần trách nhiệm cao",
                  "Có khả năng giao tiếp, báo cáo hiệu quả, chủ động",
                  "Có khả năng làm việc dưới áp lực và khả năng quản trị cảm xúc tốt",
                  "Có tính tỉ mỉ, cẩn thận cao",
                  "Có khả năng tìm kiếm, nghiên cứu và chắt lọc thông tin tốt",
                  "Có sự nhạy bén trong ngôn ngữ",
                  "Có thể dành 4 – 5 tiếng làm việc trong tuần, 2 – 3 tiếng cuối tuần cho các buổi họp triển khai công việc và làm việc liên ban",
                  "Biết sử dụng các công cụ tiện ích, chẳng hạn như Google Drive, Microsoft Word, Google Docs, Google Sheets",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Có kiến thức chuyên sâu về bảo mật ứng dụng di động (Android, iOS) và ứng dụng máy tính (Windows, macOS, Linux).",
                  "Thành thạo sử dụng các công cụ kiểm thử bảo mật ứng dụng (MobSF, Frida, Burp Suite, v.v.).",
                  "Có khả năng phân tích, đánh giá và xử lý các lỗ hổng bảo mật trên ứng dụng.",
                  "Có kinh nghiệm xây dựng, quản lý và triển khai các dự án bảo mật ứng dụng thực tế.",
                  "Có khả năng thiết kế và triển khai quy trình kiểm thử bảo mật cho ứng dụng.",
                  "Có kỹ năng lãnh đạo, quản lý đội nhóm và đào tạo phát triển nhân sự trong lĩnh vực bảo mật ứng dụng.",
                  "Có khả năng xây dựng chiến lược phát triển sản phẩm, phân tích thị trường và đánh giá hiệu quả dự án bảo mật ứng dụng.",
                  "Biết sử dụng github",
                  "Ưu tiên ứng viên từng tham gia các cuộc thi CTF, viết blog bảo mật hoặc có sản phẩm thực tế liên quan đến bảo mật ứng dụng.",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Mỗi thành viên được sử dụng một tên miền <tên-thành-viên>.nexuron.dev",
                  "Được tham gia vào các dự án lớn",
                  "Tất cả các dự án nếu tham gia đều được cho phép đưa vào CV",
                  "Được hỗ trợ bởi các chuyên gia trong lĩnh vực",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "Find the key. What you see is what you need. https://github.com/MHP0920/nexuron-cs-app-challenge",
                  "Bạn nghĩ MHPKMS có lỗ hỏng nào trong flow xử lí không? (dựa vào những gì viết trên web)",
                ],
                isQuestion: true,
              },
            ],
            function: "Cybersecurity",
            position: "Head",
          };
        default:
          throw createError({
            statusCode: 404,
            statusMessage: "Not Found",
            message: "Không tìm thấy thông tin về ban này",
          });
      }
      break;
    case "ai-machine-learning":
      switch (role) {
        case "member":
          return {
            title: "Thành viên ban AI - Machine Learning",
            deadline: "02/06/2025",
            description: [
              {
                title: "Mục đích của Ban AI - Machine Learning",
                description: [
                  "Với vai trò là thành viên Ban AI - Machine Learning, bạn sẽ tham gia nghiên cứu, phát triển và ứng dụng các thuật toán học máy mới vào các dự án thực tế.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Tham gia nghiên cứu, phát triển và ứng dụng các thuật toán học máy vào các dự án thực tế.",
                  "Xây dựng, huấn luyện và đánh giá các mô hình machine learning.",
                  "Phối hợp với các thành viên khác để triển khai giải pháp AI cho sản phẩm của nhóm.",
                  "Tham gia các cuộc thi AI (Tin học trẻ, VOAI, Kaggle, SOICT, v.v)",
                  "Cập nhật kiến thức về các xu hướng mới trong lĩnh vực AI và machine learning.",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Học sinh là thành viên của lớp chuyên tin niên khóa 2024-2027 hoặc các niên khóa từ 2025 trở đi",
                  "Đảm bảo thời gian đồng hành cùng tổ chức ít nhất 12 tháng",
                  "Nhiệt tình, chủ động, linh hoạt, sáng tạo và có tinh thần trách nhiệm cao",
                  "Có khả năng giao tiếp, báo cáo hiệu quả, chủ động",
                  "Có khả năng làm việc dưới áp lực và khả năng quản trị cảm xúc tốt",
                  "Có tính tỉ mỉ, cẩn thận cao",
                  "Có khả năng tìm kiếm, nghiên cứu và chắt lọc thông tin tốt",
                  "Có sự nhạy bén trong ngôn ngữ",
                  "Có thể dành 4 – 5 tiếng làm việc trong tuần, 2 – 3 tiếng cuối tuần cho các buổi họp triển khai công việc và làm việc liên ban",
                  "Biết sử dụng các công cụ tiện ích, chẳng hạn như Google Drive, Microsoft Word, Google Docs, Google Sheets",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Có kiến thức cơ bản về machine learning, các thuật toán học máy (supervised, unsupervised, reinforcement learning, v.v.).",
                  "Biết sử dụng ít nhất một framework AI/ML phổ biến (TensorFlow, PyTorch, Scikit-learn, v.v.).",
                  "Có khả năng lập trình tốt (Python, Java, C++, v.v.).",
                  "Có khả năng đọc hiểu tài liệu tiếng Anh chuyên ngành.",
                  "Biết xử lý dữ liệu, tiền xử lý dữ liệu và đánh giá mô hình.",
                  "Ưu tiên ứng viên từng tham gia các dự án AI/ML hoặc có sản phẩm thực tế.",
                  "Biết sử dụng github",
                  "Ưu tiên ứng viên từng tham gia các cuộc thi AI (Tin học trẻ, VOAI, Kaggle, SOICT, v.v.)",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Mỗi thành viên được sử dụng một tên miền <tên-thành-viên>.nexuron.dev",
                  "Được tham gia vào các dự án lớn",
                  "Tất cả các dự án nếu tham gia đều được cho phép đưa vào CV",
                  "Được hỗ trợ bởi các chuyên gia trong lĩnh vực",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "Cho một bảng số liệu, biết chủ đề cần làm, gồm rất nhiều cột (bao gồm cả category và numeric) và hàng, mất nhãn, hãy viết quy trình xử lí dữ liệu và cách xây dựng mô hình tối ưu để đầu ra MAE là nhỏ nhất. (Có thể gửi link blog kaggle tự viết bằng cách sử dụng một bộ dữ liệu có sẵn và thỏa yêu cầu)",
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
                  "Với vai trò là thành viên Ban AI - Machine Learning, bạn sẽ tham gia nghiên cứu, phát triển và ứng dụng các thuật toán học máy mới vào các dự án thực tế.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Hỗ trợ Trưởng ban trong việc xây dựng, triển khai chiến lược phát triển các dự án AI/ML.",
                  "Quản lý, phân công và giám sát tiến độ công việc của các thành viên trong ban.",
                  "Tham gia trực tiếp vào quá trình phát triển, kiểm thử và tối ưu các mô hình AI/ML.",
                  "Đào tạo, hướng dẫn các thành viên mới về quy trình phát triển và công cụ AI/ML.",
                  "Báo cáo tiến độ, kết quả công việc cho Trưởng ban và đề xuất giải pháp khi có vấn đề phát sinh.",
                  "Cập nhật kiến thức về các xu hướng mới trong lĩnh vực AI và machine learning.",
                  "Tham gia các cuộc thi AI (Tin học trẻ, VOAI, Kaggle, SOICT, v.v)",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Học sinh là thành viên của lớp chuyên tin niên khóa 2024-2027 hoặc các niên khóa từ 2025 trở đi",
                  "Đảm bảo thời gian đồng hành cùng tổ chức ít nhất 12 tháng",
                  "Nhiệt tình, chủ động, linh hoạt, sáng tạo và có tinh thần trách nhiệm cao",
                  "Có khả năng giao tiếp, báo cáo hiệu quả, chủ động",
                  "Có khả năng làm việc dưới áp lực và khả năng quản trị cảm xúc tốt",
                  "Có tính tỉ mỉ, cẩn thận cao",
                  "Có khả năng tìm kiếm, nghiên cứu và chắt lọc thông tin tốt",
                  "Có sự nhạy bén trong ngôn ngữ",
                  "Có thể dành 4 – 5 tiếng làm việc trong tuần, 2 – 3 tiếng cuối tuần cho các buổi họp triển khai công việc và làm việc liên ban",
                  "Biết sử dụng các công cụ tiện ích, chẳng hạn như Google Drive, Microsoft Word, Google Docs, Google Sheets",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Có kiến thức vững về machine learning, các thuật toán học máy (supervised, unsupervised, reinforcement learning, v.v.).",
                  "Thành thạo sử dụng ít nhất một framework AI/ML phổ biến (TensorFlow, PyTorch, Scikit-learn, v.v.).",
                  "Có khả năng lập trình tốt (Python, Java, C++, v.v.).",
                  "Có khả năng đọc hiểu tài liệu tiếng Anh chuyên ngành.",
                  "Có khả năng xử lý dữ liệu, tiền xử lý dữ liệu và đánh giá mô hình.",
                  "Có kinh nghiệm quản lý nhóm và phân công công việc trong lĩnh vực AI/ML.",
                  "Có khả năng thiết kế và triển khai quy trình phát triển sản phẩm AI/ML.",
                  "Biết sử dụng github",
                  "Ưu tiên ứng viên từng tham gia các dự án AI/ML hoặc có sản phẩm thực tế.",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Mỗi thành viên được sử dụng một tên miền <tên-thành-viên>.nexuron.dev",
                  "Được tham gia vào các dự án lớn",
                  "Tất cả các dự án nếu tham gia đều được cho phép đưa vào CV",
                  "Được hỗ trợ bởi các chuyên gia trong lĩnh vực",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "Cho một bảng số liệu, biết chủ đề cần làm, gồm rất nhiều cột (bao gồm cả category và numeric) và hàng, mất nhãn, hãy viết quy trình xử lí dữ liệu và cách xây dựng mô hình tối ưu để đầu ra MAE là nhỏ nhất. (Có thể gửi link blog kaggle tự viết bằng cách sử dụng một bộ dữ liệu có sẵn và thỏa yêu cầu)",
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
                  "Với vai trò là thành viên Ban AI - Machine Learning, bạn sẽ tham gia nghiên cứu, phát triển và ứng dụng các thuật toán học máy mới vào các dự án thực tế.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Xây dựng và định hướng chiến lược phát triển cho Ban AI - Machine Learning, đảm bảo phù hợp với mục tiêu chung của tổ chức.",
                  "Quản lý, điều phối toàn bộ hoạt động của ban, phân công nhiệm vụ và giám sát tiến độ các dự án AI/ML.",
                  "Chủ trì các cuộc họp, tổng hợp và báo cáo kết quả hoạt động của ban cho Ban lãnh đạo.",
                  "Đại diện ban làm việc với các bộ phận khác trong tổ chức.",
                  "Giải quyết các vấn đề phát sinh, đảm bảo các hoạt động AI/ML diễn ra hiệu quả và đúng tiến độ.",
                  "Đào tạo, truyền cảm hứng và phát triển năng lực cho các thành viên trong ban.",
                  "Đánh giá, cải tiến quy trình làm việc và đề xuất các giải pháp đổi mới sáng tạo cho ban.",
                  "Tham gia vào các cuộc thi AI (Tin học trẻ, VOAI, Kaggle, SOICT, v.v)",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Học sinh là thành viên của lớp chuyên tin niên khóa 2024-2027 hoặc các niên khóa từ 2025 trở đi",
                  "Đảm bảo thời gian đồng hành cùng tổ chức ít nhất 12 tháng",
                  "Nhiệt tình, chủ động, linh hoạt, sáng tạo và có tinh thần trách nhiệm cao",
                  "Có khả năng giao tiếp, báo cáo hiệu quả, chủ động",
                  "Có khả năng làm việc dưới áp lực và khả năng quản trị cảm xúc tốt",
                  "Có tính tỉ mỉ, cẩn thận cao",
                  "Có khả năng tìm kiếm, nghiên cứu và chắt lọc thông tin tốt",
                  "Có sự nhạy bén trong ngôn ngữ",
                  "Có thể dành 4 – 5 tiếng làm việc trong tuần, 2 – 3 tiếng cuối tuần cho các buổi họp triển khai công việc và làm việc liên ban",
                  "Biết sử dụng các công cụ tiện ích, chẳng hạn như Google Drive, Microsoft Word, Google Docs, Google Sheets",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Có kiến thức chuyên sâu về machine learning, các thuật toán học máy (supervised, unsupervised, reinforcement learning, v.v.).",
                  "Thành thạo sử dụng ít nhất một framework AI/ML phổ biến (TensorFlow, PyTorch, Scikit-learn, v.v.).",
                  "Có khả năng lập trình tốt (Python, Java, C++, v.v.).",
                  "Có khả năng đọc hiểu tài liệu tiếng Anh chuyên ngành.",
                  "Có khả năng xử lý dữ liệu, tiền xử lý dữ liệu và đánh giá mô hình.",
                  "Có kinh nghiệm xây dựng, quản lý và triển khai các dự án AI/ML thực tế.",
                  "Có khả năng thiết kế và triển khai quy trình phát triển sản phẩm AI/ML.",
                  "Có kỹ năng lãnh đạo, quản lý đội nhóm và đào tạo phát triển nhân sự trong lĩnh vực AI/ML.",
                  "Có khả năng xây dựng chiến lược phát triển sản phẩm, phân tích thị trường và đánh giá hiệu quả dự án AI/ML.",
                  "Biết sử dụng github",
                  "Ưu tiên ứng viên từng giữ vai trò trưởng ban hoặc quản lý cấp cao trong các dự án",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Mỗi thành viên được sử dụng một tên miền <tên-thành-viên>.nexuron.dev",
                  "Được tham gia vào các dự án lớn",
                  "Tất cả các dự án nếu tham gia đều được cho phép đưa vào CV",
                  "Được hỗ trợ bởi các chuyên gia trong lĩnh vực",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "Cho một bảng số liệu, biết chủ đề cần làm, gồm rất nhiều cột (bao gồm cả category và numeric) và hàng, mất nhãn, hãy viết quy trình xử lí dữ liệu và cách xây dựng mô hình tối ưu để đầu ra MAE là nhỏ nhất. (Có thể gửi link blog kaggle tự viết bằng cách sử dụng một bộ dữ liệu có sẵn và thỏa yêu cầu)",
                ],
                isQuestion: true,
              },
            ],
            function: "AI",
            position: "Head",
          };
        default:
          throw createError({
            statusCode: 404,
            statusMessage: "Not Found",
            message: "Không tìm thấy thông tin về ban này",
          });
      }
      break;
    case "ai-computer-vision":
      switch (role) {
        case "member":
          return {
            title: "Thành viên Ban AI - Computer Vision",
            deadline: "02/06/2025",
            description: [
              {
                title: "Mục đích của Ban AI - Computer Vision",
                description: [
                  "Với vai trò là thành viên Ban AI - Computer Vision, bạn sẽ tham gia xây dựng các pipeline xử lý ảnh nhằm phân tích và hiểu dữ liệu hình ảnh, từ đó phát triển các ứng dụng AI trong lĩnh vực thị giác máy tính.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Tham gia xây dựng các pipeline xử lý ảnh nhằm phân tích và hiểu dữ liệu hình ảnh.",
                  "Phát triển, huấn luyện và đánh giá các mô hình AI trong lĩnh vực thị giác máy tính.",
                  "Phối hợp với các thành viên khác để triển khai giải pháp computer vision cho sản phẩm của nhóm.",
                  "Cập nhật kiến thức về các thuật toán, công nghệ và xu hướng mới trong lĩnh vực computer vision.",
                  "Tham gia các cuộc thi AI (Tin học trẻ, VOAI, Kaggle, SOICT, v.v)",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Học sinh là thành viên của lớp chuyên tin niên khóa 2024-2027 hoặc các niên khóa từ 2025 trở đi",
                  "Đảm bảo thời gian đồng hành cùng tổ chức ít nhất 12 tháng",
                  "Nhiệt tình, chủ động, linh hoạt, sáng tạo và có tinh thần trách nhiệm cao",
                  "Có khả năng giao tiếp, báo cáo hiệu quả, chủ động",
                  "Có khả năng làm việc dưới áp lực và khả năng quản trị cảm xúc tốt",
                  "Có tính tỉ mỉ, cẩn thận cao",
                  "Có khả năng tìm kiếm, nghiên cứu và chắt lọc thông tin tốt",
                  "Có sự nhạy bén trong ngôn ngữ",
                  "Có thể dành 4 – 5 tiếng làm việc trong tuần, 2 – 3 tiếng cuối tuần cho các buổi họp triển khai công việc và làm việc liên ban",
                  "Biết sử dụng các công cụ tiện ích, chẳng hạn như Google Drive, Microsoft Word, Google Docs, Google Sheets",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Có kiến thức cơ bản về xử lý ảnh và thị giác máy tính (image processing, computer vision).",
                  "Biết sử dụng ít nhất một framework AI/ML phổ biến (OpenCV, TensorFlow, PyTorch, v.v.).",
                  "Có khả năng lập trình Python hoặc một ngôn ngữ phù hợp cho AI/ML.",
                  "Biết sử dụng github",
                  "Ưu tiên ứng viên từng tham gia các dự án AI/Computer Vision hoặc có sản phẩm thực tế.",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Mỗi thành viên được sử dụng một tên miền <tên-thành-viên>.nexuron.dev",
                  "Được tham gia vào các dự án lớn",
                  "Tất cả các dự án nếu tham gia đều được cho phép đưa vào CV",
                  "Được hỗ trợ bởi các chuyên gia trong lĩnh vực",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "Dự án Điểm danh khuôn mặt của một nhóm trong lớp đã được demo trước đó, bạn hãy cho biết tại sao AI lại nhận diện người này qua người khác mặc dù bộ dataset gồm 50 ảnh của một người?",
                  "Trong trường hợp bạn tham dự một cuộc thi không được sử dụng dataset bên ngoài (ví dụ roboflow), có những cách nào để tăng độ chính xác của mô hình và hãy triển khai thực tế (viết blog kaggle)?",
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
                  "Với vai trò là thành viên Ban AI - Computer Vision, bạn sẽ tham gia xây dựng các pipeline xử lý ảnh nhằm phân tích và hiểu dữ liệu hình ảnh, từ đó phát triển các ứng dụng AI trong lĩnh vực thị giác máy tính.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Hỗ trợ Trưởng ban trong việc xây dựng, triển khai chiến lược phát triển các dự án AI/Computer Vision.",
                  "Quản lý, phân công và giám sát tiến độ công việc của các thành viên trong ban.",
                  "Tham gia trực tiếp vào quá trình phát triển, kiểm thử và tối ưu các mô hình computer vision.",
                  "Đào tạo, hướng dẫn các thành viên mới về quy trình, công nghệ và công cụ computer vision.",
                  "Báo cáo tiến độ, kết quả công việc cho Trưởng ban và đề xuất giải pháp khi có vấn đề phát sinh.",
                  "Cập nhật kiến thức về các thuật toán, công nghệ và xu hướng mới trong lĩnh vực computer vision.",
                  "Tham gia các cuộc thi AI (Tin học trẻ, VOAI, Kaggle, SOICT, v.v)",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Học sinh là thành viên của lớp chuyên tin niên khóa 2024-2027 hoặc các niên khóa từ 2025 trở đi",
                  "Đảm bảo thời gian đồng hành cùng tổ chức ít nhất 12 tháng",
                  "Nhiệt tình, chủ động, linh hoạt, sáng tạo và có tinh thần trách nhiệm cao",
                  "Có khả năng giao tiếp, báo cáo hiệu quả, chủ động",
                  "Có khả năng làm việc dưới áp lực và khả năng quản trị cảm xúc tốt",
                  "Có tính tỉ mỉ, cẩn thận cao",
                  "Có khả năng tìm kiếm, nghiên cứu và chắt lọc thông tin tốt",
                  "Có sự nhạy bén trong ngôn ngữ",
                  "Có thể dành 4 – 5 tiếng làm việc trong tuần, 2 – 3 tiếng cuối tuần cho các buổi họp triển khai công việc và làm việc liên ban",
                  "Biết sử dụng các công cụ tiện ích, chẳng hạn như Google Drive, Microsoft Word, Google Docs, Google Sheets",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Có kiến thức vững về xử lý ảnh, thị giác máy tính và deep learning.",
                  "Thành thạo sử dụng các framework AI/ML (OpenCV, TensorFlow, PyTorch, v.v.).",
                  "Có kinh nghiệm triển khai, tối ưu và đánh giá mô hình computer vision thực tế.",
                  "Có kỹ năng quản lý nhóm, phân công và giám sát tiến độ công việc.",
                  "Có khả năng đào tạo, hướng dẫn thành viên mới về quy trình, công nghệ và công cụ computer vision.",
                  "Biết sử dụng github",
                  "Ưu tiên ứng viên từng giữ vai trò quản lý hoặc trưởng nhóm trong các dự án AI/Computer Vision.",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Mỗi thành viên được sử dụng một tên miền <tên-thành-viên>.nexuron.dev",
                  "Được tham gia vào các dự án lớn",
                  "Tất cả các dự án nếu tham gia đều được cho phép đưa vào CV",
                  "Được hỗ trợ bởi các chuyên gia trong lĩnh vực",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "Dự án Điểm danh khuôn mặt của một nhóm trong lớp đã được demo trước đó, bạn hãy cho biết tại sao AI lại nhận diện người này qua người khác mặc dù bộ dataset gồm 50 ảnh của một người?",
                  "Trong trường hợp bạn tham dự một cuộc thi không được sử dụng dataset bên ngoài (ví dụ roboflow), có những cách nào để tăng độ chính xác của mô hình và hãy triển khai thực tế (viết blog kaggle)?",
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
                  "Với vai trò là thành viên Ban AI - Computer Vision, bạn sẽ tham gia xây dựng các pipeline xử lý ảnh nhằm phân tích và hiểu dữ liệu hình ảnh, từ đó phát triển các ứng dụng AI trong lĩnh vực thị giác máy tính.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Xây dựng và định hướng chiến lược phát triển cho Ban AI - Computer Vision, đảm bảo phù hợp với mục tiêu chung của tổ chức.",
                  "Quản lý, điều phối toàn bộ hoạt động của ban, phân công nhiệm vụ và giám sát tiến độ các dự án computer vision.",
                  "Chủ trì các cuộc họp, tổng hợp và báo cáo kết quả hoạt động của ban cho Ban lãnh đạo.",
                  "Đại diện ban làm việc với các bộ phận khác trong tổ chức.",
                  "Giải quyết các vấn đề phát sinh, đảm bảo các hoạt động computer vision diễn ra hiệu quả và đúng tiến độ.",
                  "Đào tạo, truyền cảm hứng và phát triển năng lực cho các thành viên trong ban.",
                  "Đánh giá, cải tiến quy trình làm việc và đề xuất các giải pháp đổi mới sáng tạo cho ban.",
                  "Tham gia các cuộc thi AI (Tin học trẻ, VOAI, Kaggle, SOICT, v.v)",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Học sinh là thành viên của lớp chuyên tin niên khóa 2024-2027 hoặc các niên khóa từ 2025 trở đi",
                  "Đảm bảo thời gian đồng hành cùng tổ chức ít nhất 12 tháng",
                  "Nhiệt tình, chủ động, linh hoạt, sáng tạo và có tinh thần trách nhiệm cao",
                  "Có khả năng giao tiếp, báo cáo hiệu quả, chủ động",
                  "Có khả năng làm việc dưới áp lực và khả năng quản trị cảm xúc tốt",
                  "Có tính tỉ mỉ, cẩn thận cao",
                  "Có khả năng tìm kiếm, nghiên cứu và chắt lọc thông tin tốt",
                  "Có sự nhạy bén trong ngôn ngữ",
                  "Có thể dành 4 – 5 tiếng làm việc trong tuần, 2 – 3 tiếng cuối tuần cho các buổi họp triển khai công việc và làm việc liên ban",
                  "Biết sử dụng các công cụ tiện ích, chẳng hạn như Google Drive, Microsoft Word, Google Docs, Google Sheets",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Có kiến thức chuyên sâu về xử lý ảnh, thị giác máy tính, deep learning và các thuật toán AI hiện đại.",
                  "Thành thạo các framework AI/ML (OpenCV, TensorFlow, PyTorch, v.v.) và các công cụ quản lý dự án AI.",
                  "Có kinh nghiệm xây dựng, quản lý và triển khai các dự án computer vision thực tế.",
                  "Có khả năng thiết kế và triển khai quy trình phát triển sản phẩm computer vision.",
                  "Có kỹ năng lãnh đạo, quản lý đội nhóm và đào tạo phát triển nhân sự trong lĩnh vực computer vision.",
                  "Biết sử dụng github",
                  "Ưu tiên ứng viên từng giữ vai trò trưởng ban hoặc quản lý cấp cao trong các dự án AI/Computer Vision hoặc có sản phẩm thực tế.",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Mỗi thành viên được sử dụng một tên miền <tên-thành-viên>.nexuron.dev",
                  "Được tham gia vào các dự án lớn",
                  "Tất cả các dự án nếu tham gia đều được cho phép đưa vào CV",
                  "Được hỗ trợ bởi các chuyên gia trong lĩnh vực",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "Dự án Điểm danh khuôn mặt của một nhóm trong lớp đã được demo trước đó, bạn hãy cho biết tại sao AI lại nhận diện người này qua người khác mặc dù bộ dataset gồm 50 ảnh của một người?",
                  "Trong trường hợp bạn tham dự một cuộc thi không được sử dụng dataset bên ngoài (ví dụ roboflow), có những cách nào để tăng độ chính xác của mô hình và hãy triển khai thực tế (viết blog kaggle)?",
                ],
                isQuestion: true,
              },
            ],
            function: "AI",
            position: "Head",
          };
        default:
          throw createError({
            statusCode: 404,
            statusMessage: "Not Found",
            message: "Không tìm thấy thông tin về ban này",
          });
      }
      break;
    case "ai-natural-language-processing":
      switch (role) {
        case "member":
          return {
            title: "Thành viên Ban AI - Natural Language Processing",
            deadline: "02/06/2025",
            description: [
              {
                title: "Mục đích của Ban AI - Natural Language Processing",
                description: [
                  "Với vai trò là thành viên Ban AI - Natural Language Processing, bạn sẽ tham gia thiết kế các mô hình xử lý ngôn ngữ tự nhiên nhằm hiểu và phân tích văn bản, đồng thời phát triển các giải pháp AI ứng dụng trong lĩnh vực xử lý ngôn ngữ.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Tham gia thiết kế, xây dựng và huấn luyện các mô hình xử lý ngôn ngữ tự nhiên (NLP) để hiểu và phân tích văn bản.",
                  "Phối hợp với các thành viên khác để phát triển các giải pháp AI ứng dụng trong lĩnh vực xử lý ngôn ngữ.",
                  "Cập nhật kiến thức về các thuật toán, công nghệ và xu hướng mới trong lĩnh vực NLP.",
                  "Tham gia các cuộc thi AI (Tin học trẻ, VOAI, Kaggle, SOICT, v.v)",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Học sinh là thành viên của lớp chuyên tin niên khóa 2024-2027 hoặc các niên khóa từ 2025 trở đi",
                  "Đảm bảo thời gian đồng hành cùng tổ chức ít nhất 12 tháng",
                  "Nhiệt tình, chủ động, linh hoạt, sáng tạo và có tinh thần trách nhiệm cao",
                  "Có khả năng giao tiếp, báo cáo hiệu quả, chủ động",
                  "Có khả năng làm việc dưới áp lực và khả năng quản trị cảm xúc tốt",
                  "Có tính tỉ mỉ, cẩn thận cao",
                  "Có khả năng tìm kiếm, nghiên cứu và chắt lọc thông tin tốt",
                  "Có sự nhạy bén trong ngôn ngữ",
                  "Có thể dành 4 – 5 tiếng làm việc trong tuần, 2 – 3 tiếng cuối tuần cho các buổi họp triển khai công việc và làm việc liên ban",
                  "Biết sử dụng các công cụ tiện ích, chẳng hạn như Google Drive, Microsoft Word, Google Docs, Google Sheets",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Có kiến thức cơ bản về xử lý ngôn ngữ tự nhiên, các kỹ thuật tiền xử lý văn bản (tokenization, stemming, lemmatization, v.v.).",
                  "Biết sử dụng ít nhất một framework NLP phổ biến (NLTK, spaCy, HuggingFace Transformers, v.v.).",
                  "Có khả năng lập trình Python hoặc một ngôn ngữ phù hợp cho NLP.",
                  "Biết sử dụng github",
                  "Ưu tiên ứng viên từng tham gia các dự án AI/NLP hoặc có sản phẩm thực tế.",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Mỗi thành viên được sử dụng một tên miền <tên-thành-viên>.nexuron.dev",
                  "Được tham gia vào các dự án lớn",
                  "Tất cả các dự án nếu tham gia đều được cho phép đưa vào CV",
                  "Được hỗ trợ bởi các chuyên gia trong lĩnh vực",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "Về lĩnh vực xử lý ngôn ngữ tự nhiên, bạn hãy cho biết bộ dataset mẫu ảnh hưởng đến độ chính xác của mô hình như thế nào?",
                  "Hãy cho biết một số cách để làm sạch dữ liệu văn bản trước khi đưa vào mô hình?",
                  "Hãy làm một mô hình khoảng dưới 1 triệu tham số để dự đoán và làm các bài phân tích đánh giá độ hiệu quả của mô hình từ các từ ngữ viết tắt thường được sử dụng tại lớp 10 Tin-LN niên khóa 2024-2027 thành các từ ngữ đầy đủ? (Viết blog vào Kaggle kèm bộ dataset thu thập được)",
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
                  "Với vai trò là thành viên Ban AI - Natural Language Processing, bạn sẽ tham gia thiết kế các mô hình xử lý ngôn ngữ tự nhiên nhằm hiểu và phân tích văn bản, đồng thời phát triển các giải pháp AI ứng dụng trong lĩnh vực xử lý ngôn ngữ.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Hỗ trợ Trưởng ban trong việc xây dựng, triển khai chiến lược phát triển các dự án NLP.",
                  "Quản lý, phân công và giám sát tiến độ công việc của các thành viên trong ban.",
                  "Tham gia trực tiếp vào quá trình phát triển, kiểm thử và tối ưu các mô hình NLP.",
                  "Đào tạo, hướng dẫn các thành viên mới về quy trình, công nghệ và công cụ NLP.",
                  "Báo cáo tiến độ, kết quả công việc cho Trưởng ban và đề xuất giải pháp khi có vấn đề phát sinh.",
                  "Cập nhật kiến thức về các thuật toán, công nghệ và xu hướng mới trong lĩnh vực NLP.",
                  "Tham gia các cuộc thi AI (Tin học trẻ, VOAI, Kaggle, SOICT, v.v)",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Học sinh là thành viên của lớp chuyên tin niên khóa 2024-2027 hoặc các niên khóa từ 2025 trở đi",
                  "Đảm bảo thời gian đồng hành cùng tổ chức ít nhất 12 tháng",
                  "Nhiệt tình, chủ động, linh hoạt, sáng tạo và có tinh thần trách nhiệm cao",
                  "Có khả năng giao tiếp, báo cáo hiệu quả, chủ động",
                  "Có khả năng làm việc dưới áp lực và khả năng quản trị cảm xúc tốt",
                  "Có tính tỉ mỉ, cẩn thận cao",
                  "Có khả năng tìm kiếm, nghiên cứu và chắt lọc thông tin tốt",
                  "Có sự nhạy bén trong ngôn ngữ",
                  "Có thể dành 4 – 5 tiếng làm việc trong tuần, 2 – 3 tiếng cuối tuần cho các buổi họp triển khai công việc và làm việc liên ban",
                  "Biết sử dụng các công cụ tiện ích, chẳng hạn như Google Drive, Microsoft Word, Google Docs, Google Sheets",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Có kiến thức vững về xử lý ngôn ngữ tự nhiên, các mô hình học sâu (deep learning) cho NLP.",
                  "Thành thạo sử dụng các framework NLP (spaCy, HuggingFace Transformers, v.v.).",
                  "Có kinh nghiệm triển khai, tối ưu và đánh giá mô hình NLP thực tế.",
                  "Có kỹ năng quản lý nhóm, phân công và giám sát tiến độ công việc.",
                  "Có khả năng đào tạo, hướng dẫn thành viên mới về quy trình, công nghệ và công cụ NLP.",
                  "Biết sử dụng github",
                  "Ưu tiên ứng viên từng giữ vai trò quản lý hoặc trưởng nhóm trong các dự án AI/NLP.",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Mỗi thành viên được sử dụng một tên miền <tên-thành-viên>.nexuron.dev",
                  "Được tham gia vào các dự án lớn",
                  "Tất cả các dự án nếu tham gia đều được cho phép đưa vào CV",
                  "Được hỗ trợ bởi các chuyên gia trong lĩnh vực",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "Về lĩnh vực xử lý ngôn ngữ tự nhiên, bạn hãy cho biết bộ dataset mẫu ảnh hưởng đến độ chính xác của mô hình như thế nào?",
                  "Hãy cho biết một số cách để làm sạch dữ liệu văn bản trước khi đưa vào mô hình?",
                  "Hãy làm một mô hình khoảng dưới 1 triệu tham số để dự đoán và làm các bài phân tích đánh giá độ hiệu quả của mô hình từ các từ ngữ viết tắt thường được sử dụng tại lớp 10 Tin-LN niên khóa 2024-2027 thành các từ ngữ đầy đủ? (Viết blog vào Kaggle kèm bộ dataset thu thập được)",
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
                  "Với vai trò là thành viên Ban AI - Natural Language Processing, bạn sẽ tham gia thiết kế các mô hình xử lý ngôn ngữ tự nhiên nhằm hiểu và phân tích văn bản, đồng thời phát triển các giải pháp AI ứng dụng trong lĩnh vực xử lý ngôn ngữ.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Xây dựng và định hướng chiến lược phát triển cho Ban AI - NLP, đảm bảo phù hợp với mục tiêu chung của tổ chức.",
                  "Quản lý, điều phối toàn bộ hoạt động của ban, phân công nhiệm vụ và giám sát tiến độ các dự án NLP.",
                  "Chủ trì các cuộc họp, tổng hợp và báo cáo kết quả hoạt động của ban cho Ban lãnh đạo.",
                  "Đại diện ban làm việc với các bộ phận khác trong tổ chức.",
                  "Giải quyết các vấn đề phát sinh, đảm bảo các hoạt động NLP diễn ra hiệu quả và đúng tiến độ.",
                  "Đào tạo, truyền cảm hứng và phát triển năng lực cho các thành viên trong ban.",
                  "Đánh giá, cải tiến quy trình làm việc và đề xuất các giải pháp đổi mới sáng tạo cho ban.",
                  "Tham gia các cuộc thi AI (Tin học trẻ, VOAI, Kaggle, SOICT, v.v)",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Học sinh là thành viên của lớp chuyên tin niên khóa 2024-2027 hoặc các niên khóa từ 2025 trở đi",
                  "Đảm bảo thời gian đồng hành cùng tổ chức ít nhất 12 tháng",
                  "Nhiệt tình, chủ động, linh hoạt, sáng tạo và có tinh thần trách nhiệm cao",
                  "Có khả năng giao tiếp, báo cáo hiệu quả, chủ động",
                  "Có khả năng làm việc dưới áp lực và khả năng quản trị cảm xúc tốt",
                  "Có tính tỉ mỉ, cẩn thận cao",
                  "Có khả năng tìm kiếm, nghiên cứu và chắt lọc thông tin tốt",
                  "Có sự nhạy bén trong ngôn ngữ",
                  "Có thể dành 4 – 5 tiếng làm việc trong tuần, 2 – 3 tiếng cuối tuần cho các buổi họp triển khai công việc và làm việc liên ban",
                  "Biết sử dụng các công cụ tiện ích, chẳng hạn như Google Drive, Microsoft Word, Google Docs, Google Sheets",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Có kiến thức chuyên sâu về xử lý ngôn ngữ tự nhiên, các kỹ thuật học sâu (deep learning) cho NLP.",
                  "Thành thạo các framework NLP (spaCy, HuggingFace Transformers, v.v.) và các công cụ quản lý dự án AI.",
                  "Có kinh nghiệm xây dựng, quản lý và triển khai các dự án NLP thực tế.",
                  "Có khả năng thiết kế và triển khai quy trình phát triển sản phẩm NLP.",
                  "Có kỹ năng lãnh đạo, quản lý đội nhóm và đào tạo phát triển nhân sự trong lĩnh vực NLP.",
                  "Biết sử dụng github",
                  "Ưu tiên ứng viên từng giữ vai trò trưởng ban hoặc quản lý cấp cao trong các dự án AI/NLP hoặc có sản phẩm thực tế.",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Mỗi thành viên được sử dụng một tên miền <tên-thành-viên>.nexuron.dev",
                  "Được tham gia vào các dự án lớn",
                  "Tất cả các dự án nếu tham gia đều được cho phép đưa vào CV",
                  "Được hỗ trợ bởi các chuyên gia trong lĩnh vực",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "Về lĩnh vực xử lý ngôn ngữ tự nhiên, bạn hãy cho biết bộ dataset mẫu ảnh hưởng đến độ chính xác của mô hình như thế nào?",
                  "Hãy cho biết một số cách để làm sạch dữ liệu văn bản trước khi đưa vào mô hình?",
                  "Hãy làm một mô hình khoảng dưới 1 triệu tham số để dự đoán và làm các bài phân tích đánh giá độ hiệu quả của mô hình từ các từ ngữ viết tắt thường được sử dụng tại lớp 10 Tin-LN niên khóa 2024-2027 thành các từ ngữ đầy đủ? (Viết blog vào Kaggle kèm bộ dataset thu thập được)",
                ],
                isQuestion: true,
              },
            ],
            function: "AI",
            position: "Head",
          };
        default:
          throw createError({
            statusCode: 404,
            statusMessage: "Not Found",
            message: "Không tìm thấy thông tin về ban này",
          });
      }
      break;
    case "web-frontend":
      switch (role) {
        case "member":
          return {
            title: "Thành viên Ban Website - Frontend",
            deadline: "02/06/2025",
            description: [
              {
                title: "Mục đích của Ban Website - Frontend",
                description: [
                  "Với vai trò là thành viên Ban Website - Frontend, bạn sẽ chịu trách nhiệm xây dựng giao diện người dùng hiện đại, đáp ứng tốt trên nhiều thiết bị và đảm bảo khả năng truy cập cho mọi đối tượng.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Tham gia xây dựng giao diện người dùng hiện đại, tối ưu trải nghiệm trên nhiều thiết bị.",
                  "Phối hợp với các thành viên khác để đảm bảo giao diện đáp ứng tiêu chuẩn truy cập và hiệu suất.",
                  "Tham gia kiểm thử, sửa lỗi và tối ưu hiệu năng cho các sản phẩm web.",
                  "Cập nhật kiến thức về các công nghệ, xu hướng mới trong lĩnh vực frontend.",
                  "Tham gia các cuộc thi Tin học trẻ, v.v",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Học sinh là thành viên của lớp chuyên tin niên khóa 2024-2027 hoặc các niên khóa từ 2025 trở đi",
                  "Đảm bảo thời gian đồng hành cùng tổ chức ít nhất 12 tháng",
                  "Nhiệt tình, chủ động, linh hoạt, sáng tạo và có tinh thần trách nhiệm cao",
                  "Có khả năng giao tiếp, báo cáo hiệu quả, chủ động",
                  "Có khả năng làm việc dưới áp lực và khả năng quản trị cảm xúc tốt",
                  "Có tính tỉ mỉ, cẩn thận cao",
                  "Có khả năng tìm kiếm, nghiên cứu và chắt lọc thông tin tốt",
                  "Có sự nhạy bén trong ngôn ngữ",
                  "Có thể dành 4 – 5 tiếng làm việc trong tuần, 2 – 3 tiếng cuối tuần cho các buổi họp triển khai công việc và làm việc liên ban",
                  "Biết sử dụng các công cụ tiện ích, chẳng hạn như Google Drive, Microsoft Word, Google Docs, Google Sheets",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Có kiến thức cơ bản về HTML, CSS, JavaScript, TailwindCSS.",
                  "Biết sử dụng ít nhất một framework/library frontend phổ biến (React, Vue, Angular, v.v.).",
                  "Hiểu về responsive design và accessibility.",
                  "Có khả năng làm việc với các công cụ quản lý mã nguồn (Git, GitHub).",
                  "Có khả năng làm việc nhóm và giao tiếp hiệu quả.",
                  "Ưu tiên ứng viên từng tham gia các dự án web hoặc có sản phẩm thực tế.",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Mỗi thành viên được sử dụng một tên miền <tên-thành-viên>.nexuron.dev",
                  "Được tham gia vào các dự án lớn",
                  "Tất cả các dự án nếu tham gia đều được cho phép đưa vào CV",
                  "Được hỗ trợ bởi các chuyên gia trong lĩnh vực",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "Hãy đánh giá hiệu năng của trang web Nexuron và gợi ý một số cách để cải thiện hiệu suất của nó.",
                  "Nhiều người cho rằng TailwindCSS sẽ làm lập trình viên mất đi khả năng tư duy về CSS, bạn có đồng ý với quan điểm này không? Tại sao?",
                  "Nếu bạn đã từng làm một trang web cho một dự án nào đó, hãy cho biết bạn đã sử dụng công nghệ gì và tại sao bạn lại chọn nó?",
                ],
                isQuestion: true,
              },
            ],
            function: "Web",
            position: "Member",
          };
        case "vice":
          return {
            title: "Phó ban Website - Frontend",
            deadline: "02/06/2025",
            description: [
              {
                title: "Mục đích của Ban Website - Frontend",
                description: [
                  "Với vai trò là thành viên Ban Website - Frontend, bạn sẽ chịu trách nhiệm xây dựng giao diện người dùng hiện đại, đáp ứng tốt trên nhiều thiết bị và đảm bảo khả năng truy cập cho mọi đối tượng.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Hỗ trợ Trưởng ban trong việc xây dựng, triển khai chiến lược phát triển frontend cho các dự án web.",
                  "Quản lý, phân công và giám sát tiến độ công việc của các thành viên trong ban.",
                  "Tham gia trực tiếp vào quá trình phát triển, kiểm thử và tối ưu giao diện web.",
                  "Đào tạo, hướng dẫn các thành viên mới về quy trình, công nghệ và công cụ frontend.",
                  "Báo cáo tiến độ, kết quả công việc cho Trưởng ban và đề xuất giải pháp khi có vấn đề phát sinh.",
                  "Cập nhật kiến thức về các công nghệ, xu hướng mới trong lĩnh vực frontend.",
                  "Tham gia các cuộc thi Tin học trẻ, v.v",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Học sinh là thành viên của lớp chuyên tin niên khóa 2024-2027 hoặc các niên khóa từ 2025 trở đi",
                  "Đảm bảo thời gian đồng hành cùng tổ chức ít nhất 12 tháng",
                  "Nhiệt tình, chủ động, linh hoạt, sáng tạo và có tinh thần trách nhiệm cao",
                  "Có khả năng giao tiếp, báo cáo hiệu quả, chủ động",
                  "Có khả năng làm việc dưới áp lực và khả năng quản trị cảm xúc tốt",
                  "Có tính tỉ mỉ, cẩn thận cao",
                  "Có khả năng tìm kiếm, nghiên cứu và chắt lọc thông tin tốt",
                  "Có sự nhạy bén trong ngôn ngữ",
                  "Có thể dành 4 – 5 tiếng làm việc trong tuần, 2 – 3 tiếng cuối tuần cho các buổi họp triển khai công việc và làm việc liên ban",
                  "Biết sử dụng các công cụ tiện ích, chẳng hạn như Google Drive, Microsoft Word, Google Docs, Google Sheets",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Có kiến thức vững về HTML, CSS, JavaScript và các framework/library frontend (React, Vue, Angular, v.v.).",
                  "Có kinh nghiệm triển khai, tối ưu và đánh giá giao diện web thực tế.",
                  "Có khả năng thiết kế và triển khai quy trình phát triển giao diện web.",
                  "Có kỹ năng quản lý nhóm, phân công và giám sát tiến độ công việc.",
                  "Có khả năng đào tạo, hướng dẫn thành viên mới về quy trình, công nghệ và công cụ frontend.",
                  "Có khả năng làm việc với các công cụ quản lý mã nguồn (Git, GitHub).",
                  "Ưu tiên ứng viên từng giữ vai trò quản lý hoặc trưởng nhóm trong các dự án web.",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Mỗi thành viên được sử dụng một tên miền <tên-thành-viên>.nexuron.dev",
                  "Được tham gia vào các dự án lớn",
                  "Tất cả các dự án nếu tham gia đều được cho phép đưa vào CV",
                  "Được hỗ trợ bởi các chuyên gia trong lĩnh vực",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "Trường hợp bạn và thành viên có ý tưởng khác nhau và mong muốn về công nghệ khác nhau, bạn sẽ làm gì?",
                  "Nếu bạn và các thành viên khác không dùng chung một công nghệ, nhưng thành viên của bạn bị trễ tiến độ còn bạn thì không rành về công nghệ đó, hướng giải quyết như thế nào sẽ là hợp lý?",
                  "Nếu bạn đã từng làm một trang web cho một dự án nào đó, hãy cho biết bạn đã sử dụng công nghệ gì và tại sao bạn lại chọn nó?",
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
                  "Với vai trò là thành viên Ban Frontend - Website, bạn sẽ chịu trách nhiệm xây dựng giao diện người dùng hiện đại, đáp ứng tốt trên nhiều thiết bị và đảm bảo khả năng truy cập cho mọi đối tượng.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Xây dựng và định hướng chiến lược phát triển cho Ban Frontend - Website, đảm bảo phù hợp với mục tiêu chung của tổ chức.",
                  "Quản lý, điều phối toàn bộ hoạt động của ban, phân công nhiệm vụ và giám sát tiến độ các dự án frontend.",
                  "Chủ trì các cuộc họp, tổng hợp và báo cáo kết quả hoạt động của ban cho Ban lãnh đạo.",
                  "Đại diện ban làm việc với các bộ phận khác trong tổ chức.",
                  "Giải quyết các vấn đề phát sinh, đảm bảo các hoạt động frontend diễn ra hiệu quả và đúng tiến độ.",
                  "Đào tạo, truyền cảm hứng và phát triển năng lực cho các thành viên trong ban.",
                  "Đánh giá, cải tiến quy trình làm việc và đề xuất các giải pháp đổi mới sáng tạo cho ban.",
                  "Tham gia các cuộc thi Tin học trẻ, v.v",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Học sinh là thành viên của lớp chuyên tin niên khóa 2024-2027 hoặc các niên khóa từ 2025 trở đi",
                  "Đảm bảo thời gian đồng hành cùng tổ chức ít nhất 12 tháng",
                  "Nhiệt tình, chủ động, linh hoạt, sáng tạo và có tinh thần trách nhiệm cao",
                  "Có khả năng giao tiếp, báo cáo hiệu quả, chủ động",
                  "Có khả năng làm việc dưới áp lực và khả năng quản trị cảm xúc tốt",
                  "Có tính tỉ mỉ, cẩn thận cao",
                  "Có khả năng tìm kiếm, nghiên cứu và chắt lọc thông tin tốt",
                  "Có sự nhạy bén trong ngôn ngữ",
                  "Có thể dành 4 – 5 tiếng làm việc trong tuần, 2 – 3 tiếng cuối tuần cho các buổi họp triển khai công việc và làm việc liên ban",
                  "Biết sử dụng các công cụ tiện ích, chẳng hạn như Google Drive, Microsoft Word, Google Docs, Google Sheets",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Có kiến thức chuyên sâu về HTML, CSS, JavaScript và các framework/library frontend (React, Vue, Angular, v.v.).",
                  "Có kinh nghiệm xây dựng, quản lý và triển khai các dự án frontend thực tế.",
                  "Có khả năng thiết kế và triển khai quy trình phát triển giao diện web.",
                  "Có kỹ năng lãnh đạo, quản lý đội nhóm và đào tạo phát triển nhân sự trong lĩnh vực frontend.",
                  "Có khả năng làm việc với các công cụ quản lý mã nguồn (Git, GitHub).",
                  "Ưu tiên ứng viên từng giữ vai trò trưởng ban hoặc quản lý cấp cao trong các dự án web hoặc có sản phẩm thực tế.",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Mỗi thành viên được sử dụng một tên miền <tên-thành-viên>.nexuron.dev",
                  "Được tham gia vào các dự án lớn",
                  "Tất cả các dự án nếu tham gia đều được cho phép đưa vào CV",
                  "Được hỗ trợ bởi các chuyên gia trong lĩnh vực",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "Hãy vẽ một sơ đồ workflow cho một dự án bất kì, bạn sẽ cần chuẩn bị những gì ở frontend, đi từ khâu nào đến khâu nào, liên kết với backend như thế nào có bảo mật hay chưa, liệu nó đã theo một tiêu chuẩn nào chưa?",
                  "Hãy gợi ý một framework mà bạn mong muốn sử dụng cho các dự án của mình và cho biết lý do tại sao bạn lại chọn nó?",
                ],
                isQuestion: true,
              },
            ],
            function: "Web",
            position: "Head",
          };
        default:
          throw createError({
            statusCode: 404,
            statusMessage: "Not Found",
            message: "Không tìm thấy thông tin về ban này",
          });
      }
      break;
    case "web-backend":
      switch (role) {
        case "member":
          return {
            title: "Thành viên Ban Website - Backend",
            deadline: "02/06/2025",
            description: [
              {
                title: "Mục đích của Ban Website - Backend",
                description: [
                  "Với vai trò là thành viên Ban Website - Backend, bạn sẽ chịu trách nhiệm xây dựng các API, cơ sở dữ liệu và logic phía máy chủ có khả năng mở rộng, đảm bảo hiệu suất và độ tin cậy cho hệ thống.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Tham gia xây dựng các API, cơ sở dữ liệu và logic phía máy chủ cho hệ thống web.",
                  "Phối hợp với các thành viên khác để đảm bảo hệ thống backend đáp ứng tiêu chuẩn hiệu suất và độ tin cậy.",
                  "Tham gia kiểm thử, sửa lỗi và tối ưu hiệu năng cho các sản phẩm backend.",
                  "Cập nhật kiến thức về các công nghệ, xu hướng mới trong lĩnh vực backend.",
                  "Tham gia các cuộc thi Tin học trẻ, v.v",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Học sinh là thành viên của lớp chuyên tin niên khóa 2024-2027 hoặc các niên khóa từ 2025 trở đi",
                  "Đảm bảo thời gian đồng hành cùng tổ chức ít nhất 12 tháng",
                  "Nhiệt tình, chủ động, linh hoạt, sáng tạo và có tinh thần trách nhiệm cao",
                  "Có khả năng giao tiếp, báo cáo hiệu quả, chủ động",
                  "Có khả năng làm việc dưới áp lực và khả năng quản trị cảm xúc tốt",
                  "Có tính tỉ mỉ, cẩn thận cao",
                  "Có khả năng tìm kiếm, nghiên cứu và chắt lọc thông tin tốt",
                  "Có sự nhạy bén trong ngôn ngữ",
                  "Có thể dành 4 – 5 tiếng làm việc trong tuần, 2 – 3 tiếng cuối tuần cho các buổi họp triển khai công việc và làm việc liên ban",
                  "Biết sử dụng các công cụ tiện ích, chẳng hạn như Google Drive, Microsoft Word, Google Docs, Google Sheets",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Có kiến thức cơ bản về lập trình backend (Node.js, Python, Java, v.v.).",
                  "Biết xây dựng và thiết kế API (RESTful, GraphQL).",
                  "Thông thạo về các framework backend phổ biến (Fastapi, Django, NestJS, v.v.).",
                  "Có kiến thức về cơ sở dữ liệu (SQL, NoSQL) và cách tối ưu hóa truy vấn.",
                  "Có khả năng làm việc với các công cụ quản lý mã nguồn (Git, GitHub).",
                  "Có khả năng làm việc nhóm và giao tiếp hiệu quả.",
                  "Ưu tiên ứng viên từng tham gia các dự án backend hoặc có sản phẩm thực tế.",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Mỗi thành viên được sử dụng một tên miền <tên-thành-viên>.nexuron.dev",
                  "Được tham gia vào các dự án lớn",
                  "Tất cả các dự án nếu tham gia đều được cho phép đưa vào CV",
                  "Được hỗ trợ bởi các chuyên gia trong lĩnh vực",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "Giữa việc sử dụng NoSQL và SQL, bạn sẽ chọn cái nào? Tại sao?",
                  "Để xây dựng một hệ sinh thái cho một tổ chức, những công nghệ nào bạn sẽ sử dụng?",
                  "Hiện tại Nexuron đang sử dụng MongoDB, Redis, FastAPI, Caddy trên docker container sử dụng 128MB RAM cho mỗi service, giao tiếp kín với nhau và chạy cloud, bạn hãy viết một bài đánh giá trên Notion hoặc Google Docs về ưu/nhược điểm của hệ thống và cách mà bạn sẽ cải thiện nó dựa trên trải nghiệm và phân tích của bạn?",
                ],
                isQuestion: true,
              },
            ],
            function: "Web",
            position: "Member",
          };
        case "vice":
          return {
            title: "Phó ban Website - Backend",
            deadline: "02/06/2025",
            description: [
              {
                title: "Mục đích của Ban Website - Backend",
                description: [
                  "Với vai trò là thành viên Ban Website - Backend, bạn sẽ chịu trách nhiệm xây dựng các API, cơ sở dữ liệu và logic phía máy chủ có khả năng mở rộng, đảm bảo hiệu suất và độ tin cậy cho hệ thống.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Hỗ trợ Trưởng ban trong việc xây dựng, triển khai chiến lược phát triển backend cho các dự án web.",
                  "Quản lý, phân công và giám sát tiến độ công việc của các thành viên trong ban.",
                  "Tham gia trực tiếp vào quá trình phát triển, kiểm thử và tối ưu backend.",
                  "Đào tạo, hướng dẫn các thành viên mới về quy trình, công nghệ và công cụ backend.",
                  "Báo cáo tiến độ, kết quả công việc cho Trưởng ban và đề xuất giải pháp khi có vấn đề phát sinh.",
                  "Cập nhật kiến thức về các công nghệ, xu hướng mới trong lĩnh vực backend.",
                  "Tham gia các cuộc thi Tin học trẻ, v.v",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Học sinh là thành viên của lớp chuyên tin niên khóa 2024-2027 hoặc các niên khóa từ 2025 trở đi",
                  "Đảm bảo thời gian đồng hành cùng tổ chức ít nhất 12 tháng",
                  "Nhiệt tình, chủ động, linh hoạt, sáng tạo và có tinh thần trách nhiệm cao",
                  "Có khả năng giao tiếp, báo cáo hiệu quả, chủ động",
                  "Có khả năng làm việc dưới áp lực và khả năng quản trị cảm xúc tốt",
                  "Có tính tỉ mỉ, cẩn thận cao",
                  "Có khả năng tìm kiếm, nghiên cứu và chắt lọc thông tin tốt",
                  "Có sự nhạy bén trong ngôn ngữ",
                  "Có thể dành 4 – 5 tiếng làm việc trong tuần, 2 – 3 tiếng cuối tuần cho các buổi họp triển khai công việc và làm việc liên ban",
                  "Biết sử dụng các công cụ tiện ích, chẳng hạn như Google Drive, Microsoft Word, Google Docs, Google Sheets",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Có kiến thức vững về lập trình backend (Node.js, Python, Java, v.v.).",
                  "Thành thạo xây dựng và thiết kế API (RESTful, GraphQL).",
                  "Thông thạo về các framework backend phổ biến (Fastapi, Django, NestJS, v.v.).",
                  "Có kiến thức vững về cơ sở dữ liệu (SQL, NoSQL) và cách tối ưu hóa truy vấn.",
                  "Có khả năng thiết kế và triển khai quy trình phát triển backend.",
                  "Có kỹ năng quản lý nhóm, phân công và giám sát tiến độ công việc.",
                  "Có khả năng đào tạo, hướng dẫn thành viên mới về quy trình, công nghệ và công cụ backend.",
                  "Có khả năng làm việc với các công cụ quản lý mã nguồn (Git, GitHub).",
                  "Ưu tiên ứng viên từng giữ vai trò quản lý hoặc trưởng nhóm trong các dự án backend.",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Mỗi thành viên được sử dụng một tên miền <tên-thành-viên>.nexuron.dev",
                  "Được tham gia vào các dự án lớn",
                  "Tất cả các dự án nếu tham gia đều được cho phép đưa vào CV",
                  "Được hỗ trợ bởi các chuyên gia trong lĩnh vực",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "Giữa việc sử dụng NoSQL và SQL, bạn sẽ chọn cái nào? Tại sao?",
                  "Để xây dựng một hệ sinh thái cho một tổ chức, những công nghệ nào bạn sẽ sử dụng?",
                  "Hiện tại Nexuron đang sử dụng MongoDB, Redis, FastAPI, Caddy trên docker container sử dụng 128MB RAM cho mỗi service, giao tiếp kín với nhau và chạy cloud, bạn hãy viết một bài đánh giá trên Notion hoặc Google Docs về ưu/nhược điểm của hệ thống và cách mà bạn sẽ cải thiện nó dựa trên trải nghiệm và phân tích của bạn?",
                ],
                isQuestion: true,
              },
            ],
            function: "Web",
            position: "Vice",
          };
        case "head":
          return {
            title: "Trưởng ban Website - Backend",
            deadline: "02/06/2025",
            description: [
              {
                title: "Mục đích của Ban Website - Backend",
                description: [
                  "Với vai trò là thành viên Ban Website - Backend, bạn sẽ chịu trách nhiệm xây dựng các API, cơ sở dữ liệu và logic phía máy chủ có khả năng mở rộng, đảm bảo hiệu suất và độ tin cậy cho hệ thống.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Xây dựng và định hướng chiến lược phát triển cho Ban Website - Backend, đảm bảo phù hợp với mục tiêu chung của tổ chức.",
                  "Quản lý, điều phối toàn bộ hoạt động của ban, phân công nhiệm vụ và giám sát tiến độ các dự án backend.",
                  "Chủ trì các cuộc họp, tổng hợp và báo cáo kết quả hoạt động của ban cho Ban lãnh đạo.",
                  "Đại diện ban làm việc với các bộ phận khác trong tổ chức.",
                  "Giải quyết các vấn đề phát sinh, đảm bảo các hoạt động backend diễn ra hiệu quả và đúng tiến độ.",
                  "Đào tạo, truyền cảm hứng và phát triển năng lực cho các thành viên trong ban.",
                  "Đánh giá, cải tiến quy trình làm việc và đề xuất các giải pháp đổi mới sáng tạo cho ban.",
                  "Tham gia các cuộc thi Tin học trẻ, v.v",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Học sinh là thành viên của lớp chuyên tin niên khóa 2024-2027 hoặc các niên khóa từ 2025 trở đi",
                  "Đảm bảo thời gian đồng hành cùng tổ chức ít nhất 12 tháng",
                  "Nhiệt tình, chủ động, linh hoạt, sáng tạo và có tinh thần trách nhiệm cao",
                  "Có khả năng giao tiếp, báo cáo hiệu quả, chủ động",
                  "Có khả năng làm việc dưới áp lực và khả năng quản trị cảm xúc tốt",
                  "Có tính tỉ mỉ, cẩn thận cao",
                  "Có khả năng tìm kiếm, nghiên cứu và chắt lọc thông tin tốt",
                  "Có sự nhạy bén trong ngôn ngữ",
                  "Có thể dành 4 – 5 tiếng làm việc trong tuần, 2 – 3 tiếng cuối tuần cho các buổi họp triển khai công việc và làm việc liên ban",
                  "Biết sử dụng các công cụ tiện ích, chẳng hạn như Google Drive, Microsoft Word, Google Docs, Google Sheets",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Có kiến thức chuyên sâu về lập trình backend, thiết kế hệ thống, bảo mật và tối ưu hiệu năng.",
                  "Thành thạo các framework/backend stack (Node.js, Python, Java, FastAPI, Express, v.v.).",
                  "Có kinh nghiệm xây dựng, quản lý và triển khai các dự án backend thực tế.",
                  "Có khả năng thiết kế và triển khai quy trình phát triển backend.",
                  "Có kỹ năng lãnh đạo, quản lý đội nhóm và đào tạo phát triển nhân sự trong lĩnh vực backend.",
                  "Có khả năng làm việc với các công cụ quản lý mã nguồn (Git, GitHub).",
                  "Có khả năng làm việc nhóm và giao tiếp hiệu quả.",
                  "Ưu tiên ứng viên từng giữ vai trò trưởng ban hoặc quản lý cấp cao trong các dự án backend hoặc có sản phẩm thực tế.",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Mỗi thành viên được sử dụng một tên miền <tên-thành-viên>.nexuron.dev",
                  "Được tham gia vào các dự án lớn",
                  "Tất cả các dự án nếu tham gia đều được cho phép đưa vào CV",
                  "Được hỗ trợ bởi các chuyên gia trong lĩnh vực",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "Giữa việc sử dụng NoSQL và SQL, bạn sẽ chọn cái nào? Tại sao?",
                  "Để xây dựng một hệ sinh thái cho một tổ chức, những công nghệ nào bạn sẽ sử dụng?",
                  "Hiện tại Nexuron đang sử dụng MongoDB, Redis, FastAPI, Caddy trên docker container sử dụng 128MB RAM cho mỗi service, giao tiếp kín với nhau và chạy cloud, bạn hãy viết một bài đánh giá trên Notion hoặc Google Docs về ưu/nhược điểm của hệ thống và cách mà bạn sẽ cải thiện nó dựa trên trải nghiệm và phân tích của bạn?",
                ],
                isQuestion: true,
              },
            ],
            function: "Web",
            position: "Head",
          };
        default:
          throw createError({
            statusCode: 404,
            statusMessage: "Not Found",
            message: "Không tìm thấy thông tin về ban này",
          });
      }
      break;
    case "web-ui-ux":
      switch (role) {
        case "member":
          return {
            title: "Thành viên Ban Website - UI/UX",
            deadline: "02/06/2025",
            description: [
              {
                title: "Mục đích của Ban Website - UI/UX",
                description: [
                  "Với vai trò là thành viên Ban Website - UI/UX, bạn sẽ chịu trách nhiệm thiết kế luồng trải nghiệm người dùng và wireframe trực quan cho các ứng dụng web.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Tham gia thiết kế luồng trải nghiệm người dùng (user flow) và wireframe cho các ứng dụng web.",
                  "Phối hợp với các thành viên khác để đảm bảo giao diện trực quan, dễ sử dụng và phù hợp với nhu cầu người dùng.",
                  "Tham gia kiểm thử, thu thập phản hồi và đề xuất cải tiến UI/UX cho sản phẩm.",
                  "Cập nhật kiến thức về các công nghệ, xu hướng mới trong lĩnh vực UI/UX.",
                  "Tham gia các cuộc thi Tin học trẻ, v.v",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Học sinh là thành viên của lớp chuyên tin niên khóa 2024-2027 hoặc các niên khóa từ 2025 trở đi",
                  "Đảm bảo thời gian đồng hành cùng tổ chức ít nhất 12 tháng",
                  "Nhiệt tình, chủ động, linh hoạt, sáng tạo và có tinh thần trách nhiệm cao",
                  "Có khả năng giao tiếp, báo cáo hiệu quả, chủ động",
                  "Có khả năng làm việc dưới áp lực và khả năng quản trị cảm xúc tốt",
                  "Có tính tỉ mỉ, cẩn thận cao",
                  "Có khả năng tìm kiếm, nghiên cứu và chắt lọc thông tin tốt",
                  "Có sự nhạy bén trong ngôn ngữ",
                  "Có thể dành 4 – 5 tiếng làm việc trong tuần, 2 – 3 tiếng cuối tuần cho các buổi họp triển khai công việc và làm việc liên ban",
                  "Biết sử dụng các công cụ tiện ích, chẳng hạn như Google Drive, Microsoft Word, Google Docs, Google Sheets",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Có kiến thức cơ bản về thiết kế UI/UX, wireframe, user flow.",
                  "Biết sử dụng các công cụ thiết kế như Figma, Adobe XD, Sketch hoặc tương đương.",
                  "Hiểu về nguyên tắc thiết kế giao diện và trải nghiệm người dùng.",
                  "Ưu tiên ứng viên có kinh nghiệm thiết kế giao diện cho các ứng dụng web hoặc di động.",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Mỗi thành viên được sử dụng một tên miền <tên-thành-viên>.nexuron.dev",
                  "Được tham gia vào các dự án lớn",
                  "Tất cả các dự án nếu tham gia đều được cho phép đưa vào CV",
                  "Được hỗ trợ bởi các chuyên gia trong lĩnh vực",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "Trường hợp bạn và các thành viên khác thiết kế quá phức tạp và dẫn tới gây khó khăn cho Frontend, bạn sẽ làm gì để cải thiện hiệu năng nhưng vẫn giữ nguyên được trải nghiệm người dùng?",
                  "Nếu Ban Kinh tế và Marketing đánh giá UI/UX của bạn không tốt và không thể sử dụng được, bạn sẽ làm gì để cải thiện trải nghiệm người dùng (ví dụ như tìm các tài liệu gì, ở đâu, tham khảo ý kiến như thế nào, v.v)?",
                ],
                isQuestion: true,
              },
            ],
            function: "Web",
            position: "Member",
          };
        case "vice":
          return {
            title: "Phó ban Website - UI/UX",
            deadline: "02/06/2025",
            description: [
              {
                title: "Mục đích của Ban Website - UI/UX",
                description: [
                  "Với vai trò là thành viên Ban Website - UI/UX, bạn sẽ chịu trách nhiệm thiết kế luồng trải nghiệm người dùng và wireframe trực quan cho các ứng dụng web.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Hỗ trợ Trưởng ban trong việc xây dựng, triển khai chiến lược phát triển UI/UX cho các dự án web.",
                  "Quản lý, phân công và giám sát tiến độ công việc của các thành viên trong ban.",
                  "Tham gia trực tiếp vào quá trình thiết kế, kiểm thử và tối ưu UI/UX.",
                  "Đào tạo, hướng dẫn các thành viên mới về quy trình, công nghệ và công cụ UI/UX.",
                  "Báo cáo tiến độ, kết quả công việc cho Trưởng ban và đề xuất giải pháp khi có vấn đề phát sinh.",
                  "Cập nhật kiến thức về các công nghệ, xu hướng mới trong lĩnh vực UI/UX.",
                  "Tham gia các cuộc thi Tin học trẻ, v.v",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Học sinh là thành viên của lớp chuyên tin niên khóa 2024-2027 hoặc các niên khóa từ 2025 trở đi",
                  "Đảm bảo thời gian đồng hành cùng tổ chức ít nhất 12 tháng",
                  "Nhiệt tình, chủ động, linh hoạt, sáng tạo và có tinh thần trách nhiệm cao",
                  "Có khả năng giao tiếp, báo cáo hiệu quả, chủ động",
                  "Có khả năng làm việc dưới áp lực và khả năng quản trị cảm xúc tốt",
                  "Có tính tỉ mỉ, cẩn thận cao",
                  "Có khả năng tìm kiếm, nghiên cứu và chắt lọc thông tin tốt",
                  "Có sự nhạy bén trong ngôn ngữ",
                  "Có thể dành 4 – 5 tiếng làm việc trong tuần, 2 – 3 tiếng cuối tuần cho các buổi họp triển khai công việc và làm việc liên ban",
                  "Biết sử dụng các công cụ tiện ích, chẳng hạn như Google Drive, Microsoft Word, Google Docs, Google Sheets",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Có kiến thức vững về thiết kế UI/UX, wireframe, user flow.",
                  "Thành thạo các công cụ thiết kế như Figma, Adobe XD, Sketch hoặc tương đương.",
                  "Có khả năng thiết kế giao diện trực quan và dễ sử dụng cho các ứng dụng web.",
                  "Có khả năng làm việc nhóm và giao tiếp hiệu quả.",
                  "Ưu tiên ứng viên có kinh nghiệm thiết kế giao diện cho các ứng dụng web hoặc di động.",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Mỗi thành viên được sử dụng một tên miền <tên-thành-viên>.nexuron.dev",
                  "Được tham gia vào các dự án lớn",
                  "Tất cả các dự án nếu tham gia đều được cho phép đưa vào CV",
                  "Được hỗ trợ bởi các chuyên gia trong lĩnh vực",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "Trường hợp bạn và các thành viên khác thiết kế quá phức tạp và dẫn tới gây khó khăn cho Frontend, bạn sẽ làm gì để cải thiện hiệu năng nhưng vẫn giữ nguyên được trải nghiệm người dùng?",
                  "Nếu Ban Kinh tế và Marketing đánh giá UI/UX của bạn không tốt và không thể sử dụng được, bạn sẽ làm gì để cải thiện trải nghiệm người dùng (ví dụ như tìm các tài liệu gì, ở đâu, tham khảo ý kiến như thế nào, v.v)?",
                ],
                isQuestion: true,
              },
            ],
            function: "Web",
            position: "Vice",
          };
        case "head":
          return {
            title: "Trưởng ban Website - UI/UX",
            deadline: "02/06/2025",
            description: [
              {
                title: "Mục đích của Ban Website - UI/UX",
                description: [
                  "Với vai trò là thành viên Ban Website - UI/UX, bạn sẽ chịu trách nhiệm thiết kế luồng trải nghiệm người dùng và wireframe trực quan cho các ứng dụng web.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Xây dựng và định hướng chiến lược phát triển cho Ban Website - UI/UX, đảm bảo phù hợp với mục tiêu chung của tổ chức.",
                  "Quản lý, điều phối toàn bộ hoạt động của ban, phân công nhiệm vụ và giám sát tiến độ các dự án UI/UX.",
                  "Chủ trì các cuộc họp, tổng hợp và báo cáo kết quả hoạt động của ban cho Ban lãnh đạo.",
                  "Đại diện ban làm việc với các bộ phận khác trong tổ chức.",
                  "Giải quyết các vấn đề phát sinh, đảm bảo các hoạt động UI/UX diễn ra hiệu quả và đúng tiến độ.",
                  "Đào tạo, truyền cảm hứng và phát triển năng lực cho các thành viên trong ban.",
                  "Đánh giá, cải tiến quy trình làm việc và đề xuất các giải pháp đổi mới sáng tạo cho ban.",
                  "Tham gia các cuộc thi Tin học trẻ, v.v",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Học sinh là thành viên của lớp chuyên tin niên khóa 2024-2027 hoặc các niên khóa từ 2025 trở đi",
                  "Đảm bảo thời gian đồng hành cùng tổ chức ít nhất 12 tháng",
                  "Nhiệt tình, chủ động, linh hoạt, sáng tạo và có tinh thần trách nhiệm cao",
                  "Có khả năng giao tiếp, báo cáo hiệu quả, chủ động",
                  "Có khả năng làm việc dưới áp lực và khả năng quản trị cảm xúc tốt",
                  "Có tính tỉ mỉ, cẩn thận cao",
                  "Có khả năng tìm kiếm, nghiên cứu và chắt lọc thông tin tốt",
                  "Có sự nhạy bén trong ngôn ngữ",
                  "Có thể dành 4 – 5 tiếng làm việc trong tuần, 2 – 3 tiếng cuối tuần cho các buổi họp triển khai công việc và làm việc liên ban",
                  "Biết sử dụng các công cụ tiện ích, chẳng hạn như Google Drive, Microsoft Word, Google Docs, Google Sheets",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Có kiến thức chuyên sâu về thiết kế UI/UX, wireframe, user flow.",
                  "Thành thạo các công cụ thiết kế như Figma, Adobe XD, Sketch hoặc tương đương.",
                  "Có kinh nghiệm xây dựng, quản lý và triển khai các dự án UI/UX thực tế.",
                  "Có khả năng thiết kế giao diện trực quan và dễ sử dụng cho các ứng dụng web.",
                  "Có khả năng làm việc nhóm và giao tiếp hiệu quả.",
                  "Ưu tiên ứng viên từng giữ vai trò trưởng ban hoặc quản lý cấp cao trong các dự án UI/UX hoặc có sản phẩm thực tế.",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Mỗi thành viên được sử dụng một tên miền <tên-thành-viên>.nexuron.dev",
                  "Được tham gia vào các dự án lớn",
                  "Tất cả các dự án nếu tham gia đều được cho phép đưa vào CV",
                  "Được hỗ trợ bởi các chuyên gia trong lĩnh vực",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "Trường hợp bạn và các thành viên khác thiết kế quá phức tạp và dẫn tới gây khó khăn cho Frontend, bạn sẽ làm gì để cải thiện hiệu năng nhưng vẫn giữ nguyên được trải nghiệm người dùng?",
                  "Nếu Ban Kinh tế và Marketing đánh giá UI/UX của bạn không tốt và không thể sử dụng được, bạn sẽ làm gì để cải thiện trải nghiệm người dùng (ví dụ như tìm các tài liệu gì, ở đâu, tham khảo ý kiến như thế nào, v.v)?",
                ],
                isQuestion: true,
              },
            ],
            function: "Web",
            position: "Head",
          };
        default:
          throw createError({
            statusCode: 404,
            statusMessage: "Not Found",
            message: "Không tìm thấy thông tin về ban này",
          });
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
                  "Với vai trò là thành viên Ban App - Desktop, bạn sẽ chịu trách nhiệm phát triển các ứng dụng desktop đa nền tảng hiện đại, đáp ứng nhu cầu sử dụng trên nhiều hệ điều hành khác nhau.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Tham gia phát triển các ứng dụng desktop đa nền tảng (Windows, macOS, Linux, di động).",
                  "Thiết kế và xây dựng giao diện người dùng cho ứng dụng desktop.",
                  "Phối hợp với các thành viên khác để đảm bảo sản phẩm đáp ứng tiêu chuẩn hiệu suất, bảo mật và trải nghiệm người dùng.",
                  "Tham gia kiểm thử, thu thập phản hồi và đề xuất cải tiến cho sản phẩm.",
                  "Cập nhật kiến thức về các công nghệ, xu hướng mới trong lĩnh vực phát triển ứng dụng desktop.",
                  "Tham gia các cuộc thi Tin học trẻ, v.v",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Học sinh là thành viên của lớp chuyên tin niên khóa 2024-2027 hoặc các niên khóa từ 2025 trở đi",
                  "Đảm bảo thời gian đồng hành cùng tổ chức ít nhất 12 tháng",
                  "Nhiệt tình, chủ động, linh hoạt, sáng tạo và có tinh thần trách nhiệm cao",
                  "Có khả năng giao tiếp, báo cáo hiệu quả, chủ động",
                  "Có khả năng làm việc dưới áp lực và khả năng quản trị cảm xúc tốt",
                  "Có tính tỉ mỉ, cẩn thận cao",
                  "Có khả năng tìm kiếm, nghiên cứu và chắt lọc thông tin tốt",
                  "Có sự nhạy bén trong ngôn ngữ",
                  "Có thể dành 4 – 5 tiếng làm việc trong tuần, 2 – 3 tiếng cuối tuần cho các buổi họp triển khai công việc và làm việc liên ban",
                  "Biết sử dụng các công cụ tiện ích, chẳng hạn như Google Drive, Microsoft Word, Google Docs, Google Sheets",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Có kiến thức cơ bản về lập trình ứng dụng desktop (ví dụ: Electron, Qt, WPF, WinForms, JavaFX, v.v.).",
                  "Biết sử dụng ít nhất một ngôn ngữ lập trình phục vụ phát triển desktop (C#, Java, Python, JavaScript, v.v.).",
                  "Hiểu về nguyên tắc thiết kế giao diện người dùng (UI/UX) cho desktop.",
                  "Biết sử dụng github và các công cụ quản lý mã nguồn.",
                  "Ưu tiên ứng viên có kinh nghiệm phát triển ứng dụng desktop thực tế hoặc có sản phẩm thực tế.",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Mỗi thành viên được sử dụng một tên miền <tên-thành-viên>.nexuron.dev",
                  "Được tham gia vào các dự án lớn",
                  "Tất cả các dự án nếu tham gia đều được cho phép đưa vào CV",
                  "Được hỗ trợ bởi các chuyên gia trong lĩnh vực",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "Nhiều người đang dần chuyển qua sử dụng ứng dụng desktop sang web hoặc làm các ứng dụng Web Application, bạn có nghĩ rằng điều này là đúng hay sai? Tại sao?",
                  "Bạn có nghĩ rằng việc phát triển ứng dụng desktop là cần thiết hay không? Tại sao?",
                  "Giả sử tổ chức đang phát triển một dịch vụ Music Player, bạn sẽ tập trung phát triển ứng dụng vào di động hay desktop? Tại sao? (Làm một bài phân tích trên Notion hoặc Google Docs)",
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
                  "Với vai trò là thành viên Ban App - Desktop, bạn sẽ chịu trách nhiệm phát triển các ứng dụng desktop đa nền tảng hiện đại, đáp ứng nhu cầu sử dụng trên nhiều hệ điều hành khác nhau.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Hỗ trợ Trưởng ban trong việc xây dựng, triển khai chiến lược phát triển ứng dụng desktop.",
                  "Quản lý, phân công và giám sát tiến độ công việc của các thành viên trong ban.",
                  "Tham gia trực tiếp vào quá trình phát triển ứng dụng desktop.",
                  "Đào tạo, hướng dẫn các thành viên mới về quy trình, công nghệ và công cụ phát triển ứng dụng desktop.",
                  "Báo cáo tiến độ, kết quả công việc cho Trưởng ban và đề xuất giải pháp khi có vấn đề phát sinh.",
                  "Cập nhật kiến thức về các công nghệ, xu hướng mới trong lĩnh vực phát triển ứng dụng desktop.",
                  "Tham gia các cuộc thi Tin học trẻ, v.v",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Học sinh là thành viên của lớp chuyên tin niên khóa 2024-2027 hoặc các niên khóa từ 2025 trở đi",
                  "Đảm bảo thời gian đồng hành cùng tổ chức ít nhất 12 tháng",
                  "Nhiệt tình, chủ động, linh hoạt, sáng tạo và có tinh thần trách nhiệm cao",
                  "Có khả năng giao tiếp, báo cáo hiệu quả, chủ động",
                  "Có khả năng làm việc dưới áp lực và khả năng quản trị cảm xúc tốt",
                  "Có tính tỉ mỉ, cẩn thận cao",
                  "Có khả năng tìm kiếm, nghiên cứu và chắt lọc thông tin tốt",
                  "Có sự nhạy bén trong ngôn ngữ",
                  "Có thể dành 4 – 5 tiếng làm việc trong tuần, 2 – 3 tiếng cuối tuần cho các buổi họp triển khai công việc và làm việc liên ban",
                  "Biết sử dụng các công cụ tiện ích, chẳng hạn như Google Drive, Microsoft Word, Google Docs, Google Sheets",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Có kiến thức vững về lập trình ứng dụng desktop (ví dụ: Electron, Qt, WPF, WinForms, JavaFX, v.v.).",
                  "Thành thạo ít nhất một ngôn ngữ lập trình phục vụ phát triển desktop (C#, Java, Python, JavaScript, v.v.).",
                  "Có khả năng thiết kế giao diện người dùng cho ứng dụng desktop.",
                  "Biết sử dụng github và các công cụ quản lý mã nguồn.",
                  "Ưu tiên ứng viên có kinh nghiệm phát triển ứng dụng desktop thực tế hoặc có sản phẩm thực tế.",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Mỗi thành viên được sử dụng một tên miền <tên-thành-viên>.nexuron.dev",
                  "Được tham gia vào các dự án lớn",
                  "Tất cả các dự án nếu tham gia đều được cho phép đưa vào CV",
                  "Được hỗ trợ bởi các chuyên gia trong lĩnh vực",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "Nhiều người đang dần chuyển qua sử dụng ứng dụng desktop sang web hoặc làm các ứng dụng Web Application, bạn có nghĩ rằng điều này là đúng hay sai? Tại sao?",
                  "Bạn có nghĩ rằng việc phát triển ứng dụng desktop là cần thiết hay không? Tại sao?",
                  "Giả sử tổ chức đang phát triển một dịch vụ Music Player, bạn sẽ tập trung phát triển ứng dụng vào di động hay desktop? Tại sao? (Làm một bài phân tích trên Notion hoặc Google Docs)",
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
                  "Với vai trò là thành viên Ban App - Desktop, bạn sẽ chịu trách nhiệm phát triển các ứng dụng desktop đa nền tảng hiện đại, đáp ứng nhu cầu sử dụng trên nhiều hệ điều hành khác nhau.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Xây dựng và định hướng chiến lược phát triển cho Ban App - Desktop, đảm bảo phù hợp với mục tiêu chung của tổ chức.",
                  "Quản lý, điều phối toàn bộ hoạt động của ban, phân công nhiệm vụ và giám sát tiến độ các dự án ứng dụng desktop.",
                  "Chủ trì các cuộc họp, tổng hợp và báo cáo kết quả hoạt động của ban cho Ban lãnh đạo.",
                  "Đại diện ban làm việc với các bộ phận khác trong tổ chức.",
                  "Giải quyết các vấn đề phát sinh, đảm bảo các hoạt động phát triển ứng dụng desktop diễn ra hiệu quả và đúng tiến độ.",
                  "Đào tạo, truyền cảm hứng và phát triển năng lực cho các thành viên trong ban.",
                  "Đánh giá, cải tiến quy trình làm việc và đề xuất các giải pháp đổi mới sáng tạo cho ban.",
                  "Tham gia các cuộc thi Tin học trẻ, v.v",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Học sinh là thành viên của lớp chuyên tin niên khóa 2024-2027 hoặc các niên khóa từ 2025 trở đi",
                  "Đảm bảo thời gian đồng hành cùng tổ chức ít nhất 12 tháng",
                  "Nhiệt tình, chủ động, linh hoạt, sáng tạo và có tinh thần trách nhiệm cao",
                  "Có khả năng giao tiếp, báo cáo hiệu quả, chủ động",
                  "Có khả năng làm việc dưới áp lực và khả năng quản trị cảm xúc tốt",
                  "Có tính tỉ mỉ, cẩn thận cao",
                  "Có khả năng tìm kiếm, nghiên cứu và chắt lọc thông tin tốt",
                  "Có sự nhạy bén trong ngôn ngữ",
                  "Có thể dành 4 – 5 tiếng làm việc trong tuần, 2 – 3 tiếng cuối tuần cho các buổi họp triển khai công việc và làm việc liên ban",
                  "Biết sử dụng các công cụ tiện ích, chẳng hạn như Google Drive, Microsoft Word, Google Docs, Google Sheets",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Có kiến thức chuyên sâu về lập trình ứng dụng desktop (ví dụ: Electron, Qt, WPF, WinForms, JavaFX, v.v.).",
                  "Thành thạo ít nhất một ngôn ngữ lập trình phục vụ phát triển desktop (C#, Java, Python, JavaScript, v.v.).",
                  "Có kinh nghiệm xây dựng, quản lý và triển khai các dự án ứng dụng desktop thực tế.",
                  "Có khả năng thiết kế giao diện người dùng cho ứng dụng desktop.",
                  "Biết sử dụng github và các công cụ quản lý mã nguồn.",
                  "Ưu tiên ứng viên từng giữ vai trò trưởng ban hoặc quản lý cấp cao trong các dự án ứng dụng desktop hoặc có sản phẩm thực tế.",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Mỗi thành viên được sử dụng một tên miền <tên-thành-viên>.nexuron.dev",
                  "Được tham gia vào các dự án lớn",
                  "Tất cả các dự án nếu tham gia đều được cho phép đưa vào CV",
                  "Được hỗ trợ bởi các chuyên gia trong lĩnh vực",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "Nhiều người đang dần chuyển qua sử dụng ứng dụng desktop sang web hoặc làm các ứng dụng Web Application, bạn có nghĩ rằng điều này là đúng hay sai? Tại sao?",
                  "Bạn có nghĩ rằng việc phát triển ứng dụng desktop là cần thiết hay không? Tại sao?",
                  "Giả sử tổ chức đang phát triển một dịch vụ Music Player, bạn sẽ tập trung phát triển ứng dụng vào di động hay desktop? Tại sao? (Làm một bài phân tích trên Notion hoặc Google Docs)",
                ],
                isQuestion: true,
              },
            ],
            function: "App",
            position: "Head",
          };
        default:
          throw createError({
            statusCode: 404,
            statusMessage: "Not Found",
            message: "Không tìm thấy thông tin về ban này",
          });
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
                  "Với vai trò là thành viên Ban App - Embedded, bạn sẽ chịu trách nhiệm lập trình firmware và mã điều khiển cho các thiết bị nhúng.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Tham gia lập trình firmware và mã điều khiển cho các thiết bị nhúng.",
                  "Phối hợp với các thành viên khác để phát triển, kiểm thử và tối ưu hệ thống nhúng.",
                  "Tham gia thiết kế, tích hợp và kiểm tra các module phần cứng, phần mềm cho sản phẩm nhúng.",
                  "Cập nhật kiến thức về các công nghệ, xu hướng mới trong lĩnh vực nhúng.",
                  "Tham gia các cuộc thi Tin học trẻ, KHKT, v.v",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Học sinh là thành viên của lớp chuyên tin niên khóa 2024-2027 hoặc các niên khóa từ 2025 trở đi",
                  "Đảm bảo thời gian đồng hành cùng tổ chức ít nhất 12 tháng",
                  "Nhiệt tình, chủ động, linh hoạt, sáng tạo và có tinh thần trách nhiệm cao",
                  "Có khả năng giao tiếp, báo cáo hiệu quả, chủ động",
                  "Có khả năng làm việc dưới áp lực và khả năng quản trị cảm xúc tốt",
                  "Có tính tỉ mỉ, cẩn thận cao",
                  "Có khả năng tìm kiếm, nghiên cứu và chắt lọc thông tin tốt",
                  "Có sự nhạy bén trong ngôn ngữ",
                  "Có thể dành 4 – 5 tiếng làm việc trong tuần, 2 – 3 tiếng cuối tuần cho các buổi họp triển khai công việc và làm việc liên ban",
                  "Biết sử dụng các công cụ tiện ích, chẳng hạn như Google Drive, Microsoft Word, Google Docs, Google Sheets",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Có kiến thức cơ bản về lập trình nhúng (C/C++, MicroPython, v.v.).",
                  "Biết sử dụng các vi điều khiển phổ biến (STM32, Arduino, ESP32, v.v.).",
                  "Hiểu về giao tiếp ngoại vi (UART, SPI, I2C, PWM, ADC, v.v.).",
                  "Có khả năng đọc và hiểu tài liệu kỹ thuật, datasheet của các linh kiện điện tử.",
                  "Biết sử dụng github và các công cụ quản lý mã nguồn.",
                  "Ưu tiên ứng viên có kinh nghiệm lập trình nhúng thực tế hoặc có sản phẩm thực tế.",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Mỗi thành viên được sử dụng một tên miền <tên-thành-viên>.nexuron.dev",
                  "Được tham gia vào các dự án lớn",
                  "Tất cả các dự án nếu tham gia đều được cho phép đưa vào CV",
                  "Được hỗ trợ bởi các chuyên gia trong lĩnh vực",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "Trình bày quy trình tối ưu hóa bộ nhớ và hiệu năng cho một hệ thống nhúng sử dụng vi điều khiển có tài nguyên hạn chế (RAM/Flash nhỏ). Bạn sẽ áp dụng những kỹ thuật nào và tại sao?",
                  "Trình bày cách bạn thiết kế và lập trình một hệ thống điều khiển robot tự động tránh vật cản sử dụng cảm biến siêu âm hoặc hồng ngoại. Bạn sẽ lựa chọn thuật toán nào và vì sao?",
                  "Khi phát triển phần mềm cho robot di động đa cảm biến (IMU, encoder, camera), làm thế nào để đồng bộ dữ liệu cảm biến và xử lý tín hiệu trong thời gian thực? Hãy nêu các thách thức và giải pháp.",
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
                  "Với vai trò là thành viên Ban App - Embedded, bạn sẽ chịu trách nhiệm lập trình firmware và mã điều khiển cho các thiết bị nhúng.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Hỗ trợ Trưởng ban trong việc xây dựng, triển khai chiến lược phát triển ứng dụng nhúng.",
                  "Quản lý, phân công và giám sát tiến độ công việc của các thành viên trong ban.",
                  "Tham gia trực tiếp vào quá trình phát triển ứng dụng nhúng.",
                  "Đào tạo, hướng dẫn các thành viên mới về quy trình, công nghệ và công cụ phát triển ứng dụng nhúng.",
                  "Báo cáo tiến độ, kết quả công việc cho Trưởng ban và đề xuất giải pháp khi có vấn đề phát sinh.",
                  "Cập nhật kiến thức về các công nghệ, xu hướng mới trong lĩnh vực phát triển ứng dụng nhúng.",
                  "Tham gia các cuộc thi Tin học trẻ, v.v",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Học sinh là thành viên của lớp chuyên tin niên khóa 2024-2027 hoặc các niên khóa từ 2025 trở đi",
                  "Đảm bảo thời gian đồng hành cùng tổ chức ít nhất 12 tháng",
                  "Nhiệt tình, chủ động, linh hoạt, sáng tạo và có tinh thần trách nhiệm cao",
                  "Có khả năng giao tiếp, báo cáo hiệu quả, chủ động",
                  "Có khả năng làm việc dưới áp lực và khả năng quản trị cảm xúc tốt",
                  "Có tính tỉ mỉ, cẩn thận cao",
                  "Có khả năng tìm kiếm, nghiên cứu và chắt lọc thông tin tốt",
                  "Có sự nhạy bén trong ngôn ngữ",
                  "Có thể dành 4 – 5 tiếng làm việc trong tuần, 2 – 3 tiếng cuối tuần cho các buổi họp triển khai công việc và làm việc liên ban",
                  "Biết sử dụng các công cụ tiện ích, chẳng hạn như Google Drive, Microsoft Word, Google Docs, Google Sheets",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Có kiến thức vững về lập trình nhúng (C/C++, MicroPython, v.v.).",
                  "Thành thạo ít nhất một ngôn ngữ lập trình phục vụ phát triển nhúng (C, C++, Python, v.v.).",
                  "Có khả năng thiết kế và lập trình firmware cho các vi điều khiển.",
                  "Có kinh nghiệm làm việc với các giao thức giao tiếp ngoại vi (UART, SPI, I2C, PWM, ADC, v.v.).",
                  "Biết sử dụng github và các công cụ quản lý mã nguồn.",
                  "Ưu tiên ứng viên có kinh nghiệm lập trình nhúng thực tế hoặc có sản phẩm thực tế.",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Mỗi thành viên được sử dụng một tên miền <tên-thành-viên>.nexuron.dev",
                  "Được tham gia vào các dự án lớn",
                  "Tất cả các dự án nếu tham gia đều được cho phép đưa vào CV",
                  "Được hỗ trợ bởi các chuyên gia trong lĩnh vực",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "Trình bày quy trình tối ưu hóa bộ nhớ và hiệu năng cho một hệ thống nhúng sử dụng vi điều khiển có tài nguyên hạn chế (RAM/Flash nhỏ). Bạn sẽ áp dụng những kỹ thuật nào và tại sao?",
                  "Trình bày cách bạn thiết kế và lập trình một hệ thống điều khiển robot tự động tránh vật cản sử dụng cảm biến siêu âm hoặc hồng ngoại. Bạn sẽ lựa chọn thuật toán nào và vì sao?",
                  "Khi phát triển phần mềm cho robot di động đa cảm biến (IMU, encoder, camera), làm thế nào để đồng bộ dữ liệu cảm biến và xử lý tín hiệu trong thời gian thực? Hãy nêu các thách thức và giải pháp.",
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
                  "Với vai trò là thành viên Ban App - Embedded, bạn sẽ chịu trách nhiệm lập trình firmware và mã điều khiển cho các thiết bị nhúng.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Xây dựng và định hướng chiến lược phát triển cho Ban App - Embedded, đảm bảo phù hợp với mục tiêu chung của tổ chức.",
                  "Quản lý, điều phối toàn bộ hoạt động của ban, phân công nhiệm vụ và giám sát tiến độ các dự án ứng dụng nhúng.",
                  "Chủ trì các cuộc họp, tổng hợp và báo cáo kết quả hoạt động của ban cho Ban lãnh đạo.",
                  "Đại diện ban làm việc với các bộ phận khác trong tổ chức.",
                  "Giải quyết các vấn đề phát sinh, đảm bảo các hoạt động phát triển ứng dụng nhúng diễn ra hiệu quả và đúng tiến độ.",
                  "Đào tạo, truyền cảm hứng và phát triển năng lực cho các thành viên trong ban.",
                  "Đánh giá, cải tiến quy trình làm việc và đề xuất các giải pháp đổi mới sáng tạo cho ban.",
                  "Tham gia các cuộc thi Tin học trẻ, v.v",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Học sinh là thành viên của lớp chuyên tin niên khóa 2024-2027 hoặc các niên khóa từ 2025 trở đi",
                  "Đảm bảo thời gian đồng hành cùng tổ chức ít nhất 12 tháng",
                  "Nhiệt tình, chủ động, linh hoạt, sáng tạo và có tinh thần trách nhiệm cao",
                  "Có khả năng giao tiếp, báo cáo hiệu quả, chủ động",
                  "Có khả năng làm việc dưới áp lực và khả năng quản trị cảm xúc tốt",
                  "Có tính tỉ mỉ, cẩn thận cao",
                  "Có khả năng tìm kiếm, nghiên cứu và chắt lọc thông tin tốt",
                  "Có sự nhạy bén trong ngôn ngữ",
                  "Có thể dành 4 – 5 tiếng làm việc trong tuần, 2 – 3 tiếng cuối tuần cho các buổi họp triển khai công việc và làm việc liên ban",
                  "Biết sử dụng các công cụ tiện ích, chẳng hạn như Google Drive, Microsoft Word, Google Docs, Google Sheets",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Có kiến thức chuyên sâu về lập trình nhúng (C/C++, MicroPython, v.v.).",
                  "Thành thạo ít nhất một ngôn ngữ lập trình phục vụ phát triển nhúng (C, C++, Python, v.v.).",
                  "Có kinh nghiệm xây dựng, quản lý và triển khai các dự án ứng dụng nhúng thực tế.",
                  "Có khả năng thiết kế và lập trình firmware cho các vi điều khiển.",
                  "Có kinh nghiệm làm việc với các giao thức giao tiếp ngoại vi (UART, SPI, I2C, PWM, ADC, v.v.).",
                  "Biết sử dụng github và các công cụ quản lý mã nguồn.",
                  "Ưu tiên ứng viên từng giữ vai trò trưởng ban hoặc quản lý cấp cao trong các dự án ứng dụng nhúng hoặc có sản phẩm thực tế.",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Mỗi thành viên được sử dụng một tên miền <tên-thành-viên>.nexuron.dev",
                  "Được tham gia vào các dự án lớn",
                  "Tất cả các dự án nếu tham gia đều được cho phép đưa vào CV",
                  "Được hỗ trợ bởi các chuyên gia trong lĩnh vực",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "Trình bày quy trình tối ưu hóa bộ nhớ và hiệu năng cho một hệ thống nhúng sử dụng vi điều khiển có tài nguyên hạn chế (RAM/Flash nhỏ). Bạn sẽ áp dụng những kỹ thuật nào và tại sao?",
                  "Trình bày cách bạn thiết kế và lập trình một hệ thống điều khiển robot tự động tránh vật cản sử dụng cảm biến siêu âm hoặc hồng ngoại. Bạn sẽ lựa chọn thuật toán nào và vì sao?",
                  "Khi phát triển phần mềm cho robot di động đa cảm biến (IMU, encoder, camera), làm thế nào để đồng bộ dữ liệu cảm biến và xử lý tín hiệu trong thời gian thực? Hãy nêu các thách thức và giải pháp.",
                ],
                isQuestion: true,
              },
            ],
            function: "App",
            position: "Head",
          };
        default:
          throw createError({
            statusCode: 404,
            statusMessage: "Not Found",
            message: "Không tìm thấy thông tin về ban này",
          });
      }
      break;
    case "human-resources":
      switch (role) {
        case "member":
          return {
            title: "Thành viên Ban Nhân sự",
            deadline: "02/06/2025",
            description: [
              {
                title: "Mục đích của Ban Nhân sự",
                description: [
                  "Với vai trò là thành viên Ban Nhân sự, bạn sẽ tham gia vào các hoạt động quản lý, phát triển đội ngũ và xây dựng môi trường làm việc tích cực cho tổ chức.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Hỗ trợ theo dõi tiến độ công việc của các thành viên trong tổ chức.",
                  "Hỗ trợ tổ chức các hoạt động nội bộ, sự kiện gắn kết đội nhóm.",
                  "Theo dõi, cập nhật thông tin thành viên và hỗ trợ giải quyết các vấn đề nhân sự.",
                  "Đề xuất các giải pháp nâng cao hiệu quả làm việc và phát triển đội ngũ.",
                  "Tham gia xây dựng văn hóa tổ chức và môi trường làm việc tích cực.",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Học sinh là thành viên của lớp chuyên tin niên khóa 2024-2027 hoặc các niên khóa từ 2025 trở đi",
                  "Đảm bảo thời gian đồng hành cùng tổ chức ít nhất 12 tháng",
                  "Nhiệt tình, chủ động, linh hoạt, sáng tạo và có tinh thần trách nhiệm cao",
                  "Có khả năng giao tiếp, báo cáo hiệu quả, chủ động",
                  "Có khả năng làm việc dưới áp lực và khả năng quản trị cảm xúc tốt",
                  "Có tính tỉ mỉ, cẩn thận cao",
                  "Có khả năng tìm kiếm, nghiên cứu và chắt lọc thông tin tốt",
                  "Có sự nhạy bén trong ngôn ngữ",
                  "Có thể dành 4 – 5 tiếng làm việc trong tuần, 2 – 3 tiếng cuối tuần cho các buổi họp triển khai công việc và làm việc liên ban",
                  "Biết sử dụng các công cụ tiện ích, chẳng hạn như Google Drive, Microsoft Word, Google Docs, Google Sheets",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Có kiến thức cơ bản về quản trị nhân sự hoặc tổ chức sự kiện.",
                  "Có kỹ năng giao tiếp, lắng nghe và giải quyết vấn đề.",
                  "Biết sử dụng các công cụ quản lý thông tin thành viên (Google Sheets, Notion, v.v.).",
                  "Ưu tiên ứng viên từng tham gia tổ chức sự kiện, hoạt động đội nhóm hoặc có kinh nghiệm quản lý nhân sự.",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Mỗi thành viên được sử dụng một tên miền <tên-thành-viên>.nexuron.dev",
                  "Được tham gia vào các dự án lớn",
                  "Tất cả các dự án nếu tham gia đều được cho phép đưa vào CV",
                  "Được hỗ trợ bởi các chuyên gia trong lĩnh vực",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "Bạn sẽ làm gì để gắn kết các thành viên trong tổ chức?",
                  "Nếu có mâu thuẫn giữa các thành viên, bạn sẽ xử lý như thế nào?",
                  "Bạn có ý tưởng gì để nâng cao hiệu quả làm việc nhóm hoặc xây dựng văn hóa tổ chức?",
                ],
                isQuestion: true,
              },
            ],
            function: "Human Resources",
            position: "Member",
          };
        case "vice":
          return {
            title: "Phó ban Nhân sự",
            deadline: "02/06/2025",
            description: [
              {
                title: "Mục đích của Ban Nhân sự",
                description: [
                  "Với vai trò là Phó ban Nhân sự, bạn sẽ hỗ trợ Trưởng ban trong việc quản lý, phát triển đội ngũ và xây dựng môi trường làm việc tích cực cho tổ chức.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Hỗ trợ Trưởng ban trong việc xây dựng, triển khai các chiến lược phát triển nhân sự.",
                  "Quản lý, phân công và giám sát tiến độ công việc của các thành viên trong ban.",
                  "Tổ chức các hoạt động nội bộ, sự kiện gắn kết đội nhóm.",
                  "Báo cáo tiến độ, kết quả công việc cho Trưởng ban và đề xuất giải pháp khi có vấn đề phát sinh.",
                  "Đào tạo, hướng dẫn các thành viên mới về quy trình, công cụ quản lý nhân sự.",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Học sinh là thành viên của lớp chuyên tin niên khóa 2024-2027 hoặc các niên khóa từ 2025 trở đi",
                  "Đảm bảo thời gian đồng hành cùng tổ chức ít nhất 12 tháng",
                  "Nhiệt tình, chủ động, linh hoạt, sáng tạo và có tinh thần trách nhiệm cao",
                  "Có khả năng giao tiếp, báo cáo hiệu quả, chủ động",
                  "Có khả năng làm việc dưới áp lực và khả năng quản trị cảm xúc tốt",
                  "Có tính tỉ mỉ, cẩn thận cao",
                  "Có khả năng tìm kiếm, nghiên cứu và chắt lọc thông tin tốt",
                  "Có sự nhạy bén trong ngôn ngữ",
                  "Có thể dành 4 – 5 tiếng làm việc trong tuần, 2 – 3 tiếng cuối tuần cho các buổi họp triển khai công việc và làm việc liên ban",
                  "Biết sử dụng các công cụ tiện ích, chẳng hạn như Google Drive, Microsoft Word, Google Docs, Google Sheets",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Có kỹ năng quản lý nhóm, phân công và giám sát tiến độ công việc.",
                  "Có kinh nghiệm tổ chức sự kiện, hoạt động nội bộ hoặc quản lý nhân sự.",
                  "Có khả năng đào tạo, hướng dẫn thành viên mới về quy trình, công cụ quản lý nhân sự.",
                  "Biết sử dụng các công cụ quản lý thông tin thành viên (Google Sheets, Notion, v.v.).",
                  "Ưu tiên ứng viên từng giữ vai trò quản lý hoặc trưởng nhóm trong các hoạt động đội nhóm, sự kiện hoặc nhân sự.",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Mỗi thành viên được sử dụng một tên miền <tên-thành-viên>.nexuron.dev",
                  "Được tham gia vào các dự án lớn",
                  "Tất cả các dự án nếu tham gia đều được cho phép đưa vào CV",
                  "Được hỗ trợ bởi các chuyên gia trong lĩnh vực",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "Bạn sẽ làm gì để gắn kết các thành viên trong tổ chức?",
                  "Nếu có mâu thuẫn giữa các thành viên, bạn sẽ xử lý như thế nào?",
                  "Bạn có ý tưởng gì để nâng cao hiệu quả làm việc nhóm hoặc xây dựng văn hóa tổ chức?",
                  "Nếu thành viên không hoàn thành nhiệm vụ đúng hạn, bạn sẽ xử lý ra sao?",
                  "Bạn đã từng quản lí một hội nhóm hay tổ chức nào chưa (hội nhóm khoảng từ 20k-400k thành viên)? Nếu có, hãy cho chúng tôi biết về những khó khăn mà bạn đã gặp phải và cách bạn đã giải quyết chúng.",
                ],
                isQuestion: true,
              },
            ],
            function: "Human Resources",
            position: "Vice",
          };
        case "head":
          return {
            title: "Trưởng ban Nhân sự",
            deadline: "02/06/2025",
            description: [
              {
                title: "Mục đích của Ban Nhân sự",
                description: [
                  "Với vai trò là Trưởng ban Nhân sự, bạn sẽ xây dựng chiến lược phát triển đội ngũ, quản lý nhân sự và xây dựng môi trường làm việc tích cực cho tổ chức.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Xây dựng và định hướng chiến lược phát triển nhân sự cho tổ chức.",
                  "Quản lý, điều phối toàn bộ hoạt động của ban, phân công nhiệm vụ và giám sát tiến độ các dự án nhân sự.",
                  "Chủ trì các cuộc họp, tổng hợp và báo cáo kết quả hoạt động của ban cho Ban lãnh đạo.",
                  "Tham gia trực tiếp vào quá trình tuyển dụng, đào tạo và phát triển thành viên mới.",
                  "Đại diện ban làm việc với các bộ phận khác trong tổ chức.",
                  "Giải quyết các vấn đề phát sinh, đảm bảo các hoạt động nhân sự diễn ra hiệu quả và đúng tiến độ.",
                  "Đào tạo, truyền cảm hứng và phát triển năng lực cho các thành viên trong ban.",
                  "Đánh giá, cải tiến quy trình làm việc và đề xuất các giải pháp đổi mới sáng tạo cho ban.",
                  "Tổ chức các hoạt động nội bộ, sự kiện gắn kết đội nhóm.",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Học sinh là thành viên của lớp chuyên tin niên khóa 2024-2027 hoặc các niên khóa từ 2025 trở đi",
                  "Đảm bảo thời gian đồng hành cùng tổ chức ít nhất 12 tháng",
                  "Nhiệt tình, chủ động, linh hoạt, sáng tạo và có tinh thần trách nhiệm cao",
                  "Có khả năng giao tiếp, báo cáo hiệu quả, chủ động",
                  "Có khả năng làm việc dưới áp lực và khả năng quản trị cảm xúc tốt",
                  "Có tính tỉ mỉ, cẩn thận cao",
                  "Có khả năng tìm kiếm, nghiên cứu và chắt lọc thông tin tốt",
                  "Có sự nhạy bén trong ngôn ngữ",
                  "Có thể dành 4 – 5 tiếng làm việc trong tuần, 2 – 3 tiếng cuối tuần cho các buổi họp triển khai công việc và làm việc liên ban",
                  "Biết sử dụng các công cụ tiện ích, chẳng hạn như Google Drive, Microsoft Word, Google Docs, Google Sheets",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Có kiến thức chuyên sâu về quản trị nhân sự, tổ chức sự kiện và phát triển đội nhóm.",
                  "Có kỹ năng lãnh đạo, quản lý đội nhóm và đào tạo phát triển nhân sự.",
                  "Thành thạo lập kế hoạch chiến lược, phân tích và đánh giá hiệu quả hoạt động nhân sự.",
                  "Có kinh nghiệm xây dựng, quản lý và triển khai các dự án nhân sự thực tế.",
                  "Biết sử dụng các công cụ quản lý thông tin thành viên (Google Sheets, Notion, v.v.).",
                  "Ưu tiên ứng viên từng giữ vai trò trưởng ban hoặc quản lý cấp cao trong các hoạt động đội nhóm, sự kiện hoặc nhân sự.",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Mỗi thành viên được sử dụng một tên miền <tên-thành-viên>.nexuron.dev",
                  "Được tham gia vào các dự án lớn",
                  "Tất cả các dự án nếu tham gia đều được cho phép đưa vào CV",
                  "Được hỗ trợ bởi các chuyên gia trong lĩnh vực",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "Bạn sẽ làm gì để gắn kết các thành viên trong tổ chức?",
                  "Nếu có mâu thuẫn giữa các thành viên, bạn sẽ xử lý như thế nào?",
                  "Bạn có ý tưởng gì để nâng cao hiệu quả làm việc nhóm hoặc xây dựng văn hóa tổ chức?",
                  "Nếu thành viên không hoàn thành nhiệm vụ đúng hạn, bạn sẽ xử lý ra sao?",
                  "Bạn đã từng quản lí một hội nhóm hay tổ chức nào chưa (hội nhóm khoảng từ 20k-400k thành viên)? Nếu có, hãy cho chúng tôi biết về những khó khăn mà bạn đã gặp phải và cách bạn đã giải quyết chúng.",
                  "Bạn đã từng tham gia MHPTeam hay làm các dự án thuộc MHPTeam với tư cách là Co-Founder hoặc Expert chưa?.",
                ],
                isQuestion: true,
              },
            ],
            function: "Human Resources",
            position: "Head",
          };
        default:
          throw createError({
            statusCode: 404,
            statusMessage: "Not Found",
            message: "Không tìm thấy thông tin về ban này",
          });
      }
      break;
    case "competitive-programming":
      switch (role) {
        case "member":
          return {
            title: "Thành viên Ban Lập trình Thi đấu (Competitive Programming)",
            deadline: "02/06/2025",
            description: [
              {
                title: "Mục đích của Ban Lập trình Thi đấu",
                description: [
                  "Với vai trò là thành viên Ban Lập trình Thi đấu, bạn sẽ tham gia rèn luyện, phát triển kỹ năng giải thuật, thuật toán và đại diện tổ chức tham dự các cuộc thi lập trình trong và ngoài nước.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Tham gia luyện tập, giải các bài toán thuật toán trên các nền tảng như Codeforces, AtCoder, LeetCode, v.v.",
                  "Tham gia các buổi thảo luận, chia sẻ kinh nghiệm và giải pháp với các thành viên khác.",
                  "Đại diện tổ chức tham dự các cuộc thi lập trình như Tin học trẻ, VOI, ICPC, v.v.",
                  "Đóng góp xây dựng tài liệu, đề thi thử và hỗ trợ tổ chức các buổi luyện tập nội bộ.",
                  "Cập nhật kiến thức về các thuật toán, cấu trúc dữ liệu và xu hướng mới trong lĩnh vực lập trình thi đấu.",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Học sinh là thành viên của lớp chuyên tin niên khóa 2024-2027 hoặc các niên khóa từ 2025 trở đi",
                  "Đảm bảo thời gian đồng hành cùng tổ chức ít nhất 12 tháng",
                  "Nhiệt tình, chủ động, linh hoạt, sáng tạo và có tinh thần trách nhiệm cao",
                  "Có khả năng giao tiếp, báo cáo hiệu quả, chủ động",
                  "Có khả năng làm việc dưới áp lực và khả năng quản trị cảm xúc tốt",
                  "Có tính tỉ mỉ, cẩn thận cao",
                  "Có khả năng tìm kiếm, nghiên cứu và chắt lọc thông tin tốt",
                  "Có sự nhạy bén trong ngôn ngữ",
                  "Có thể dành 4 – 5 tiếng làm việc trong tuần, 2 – 3 tiếng cuối tuần cho các buổi họp triển khai công việc và làm việc liên ban",
                  "Biết sử dụng các công cụ tiện ích, chẳng hạn như Google Drive, Microsoft Word, Google Docs, Google Sheets",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Có kiến thức cơ bản về thuật toán, cấu trúc dữ liệu và lập trình.",
                  "Thành thạo ít nhất một ngôn ngữ lập trình (C++, Python, Java, v.v.).",
                  "Có kinh nghiệm giải các bài toán trên các nền tảng lập trình thi đấu (Codeforces, AtCoder, LeetCode, v.v.).",
                  "Có khả năng làm việc nhóm, chia sẻ và thảo luận giải pháp.",
                  "Ưu tiên ứng viên từng tham gia các cuộc thi lập trình hoặc có thành tích nổi bật trong lĩnh vực này.",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Mỗi thành viên được sử dụng một tên miền <tên-thành-viên>.nexuron.dev",
                  "Được tham gia vào các dự án lớn",
                  "Tất cả các dự án nếu tham gia đều được cho phép đưa vào CV",
                  "Được hỗ trợ bởi các chuyên gia trong lĩnh vực",
                  "Được hỗ trợ luyện tập, tham gia các cuộc thi lập trình trong và ngoài nước",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "Bạn đã từng tham gia cuộc thi lập trình nào chưa? Hãy chia sẻ kinh nghiệm hoặc thành tích của bạn.",
                  "Theo bạn, kỹ năng quan trọng nhất khi tham gia lập trình thi đấu là gì? Vì sao?",
                  "Hãy trình bày một bài toán thuật toán mà bạn tâm đắc nhất và cách bạn giải quyết nó.",
                  "Bạn sẽ làm gì để nâng cao kỹ năng lập trình thuật toán của bản thân và hỗ trợ các thành viên khác trong ban?",
                ],
                isQuestion: true,
              },
            ],
            function: "Competitive Programming",
            position: "Member",
          };
        case "vice":
          return {
            title: "Phó ban Lập trình Thi đấu (Competitive Programming)",
            deadline: "02/06/2025",
            description: [
              {
                title: "Mục đích của Ban Lập trình Thi đấu",
                description: [
                  "Với vai trò là Phó ban Lập trình Thi đấu, bạn sẽ hỗ trợ Trưởng ban trong việc xây dựng, phát triển đội ngũ và tổ chức các hoạt động luyện tập, thi đấu lập trình cho tổ chức.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Hỗ trợ Trưởng ban trong việc xây dựng, triển khai kế hoạch luyện tập và phát triển đội ngũ lập trình thi đấu.",
                  "Quản lý, phân công và giám sát tiến độ luyện tập, tham gia các cuộc thi của các thành viên trong ban.",
                  "Tổ chức các buổi thảo luận, chia sẻ kinh nghiệm, giải đáp thắc mắc về thuật toán, cấu trúc dữ liệu.",
                  "Đào tạo, hướng dẫn các thành viên mới về kỹ năng lập trình thi đấu.",
                  "Báo cáo tiến độ, kết quả luyện tập và thi đấu cho Trưởng ban và đề xuất giải pháp khi có vấn đề phát sinh.",
                  "Cập nhật kiến thức về các thuật toán, cấu trúc dữ liệu và xu hướng mới trong lĩnh vực lập trình thi đấu.",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Học sinh là thành viên của lớp chuyên tin niên khóa 2024-2027 hoặc các niên khóa từ 2025 trở đi",
                  "Đảm bảo thời gian đồng hành cùng tổ chức ít nhất 12 tháng",
                  "Nhiệt tình, chủ động, linh hoạt, sáng tạo và có tinh thần trách nhiệm cao",
                  "Có khả năng giao tiếp, báo cáo hiệu quả, chủ động",
                  "Có khả năng làm việc dưới áp lực và khả năng quản trị cảm xúc tốt",
                  "Có tính tỉ mỉ, cẩn thận cao",
                  "Có khả năng tìm kiếm, nghiên cứu và chắt lọc thông tin tốt",
                  "Có sự nhạy bén trong ngôn ngữ",
                  "Có thể dành 4 – 5 tiếng làm việc trong tuần, 2 – 3 tiếng cuối tuần cho các buổi họp triển khai công việc và làm việc liên ban",
                  "Biết sử dụng các công cụ tiện ích, chẳng hạn như Google Drive, Microsoft Word, Google Docs, Google Sheets",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Có kỹ năng quản lý nhóm, phân công và giám sát tiến độ luyện tập, thi đấu.",
                  "Có kinh nghiệm tham gia các cuộc thi lập trình (Codeforces, AtCoder, Tin học trẻ, VOI, ICPC, v.v.).",
                  "Có khả năng đào tạo, hướng dẫn thành viên mới về thuật toán, cấu trúc dữ liệu và kỹ năng lập trình thi đấu.",
                  "Có khả năng tổ chức các buổi luyện tập, thảo luận, giải đáp thắc mắc về thuật toán.",
                  "Ưu tiên ứng viên từng giữ vai trò quản lý hoặc trưởng nhóm trong các hoạt động lập trình thi đấu hoặc có thành tích nổi bật.",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Mỗi thành viên được sử dụng một tên miền <tên-thành-viên>.nexuron.dev",
                  "Được tham gia vào các dự án lớn",
                  "Tất cả các dự án nếu tham gia đều được cho phép đưa vào CV",
                  "Được hỗ trợ bởi các chuyên gia trong lĩnh vực",
                  "Được hỗ trợ luyện tập, tham gia các cuộc thi lập trình trong và ngoài nước",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "Bạn đã từng tham gia cuộc thi lập trình nào chưa? Hãy chia sẻ kinh nghiệm hoặc thành tích của bạn.",
                  "Bạn sẽ làm gì để nâng cao kỹ năng lập trình thuật toán của bản thân và hỗ trợ các thành viên khác trong ban?",
                  "Nếu thành viên trong ban gặp khó khăn khi luyện tập hoặc thi đấu, bạn sẽ hỗ trợ như thế nào?",
                  "Bạn có ý tưởng gì để tổ chức các buổi luyện tập hoặc thi thử hiệu quả hơn cho ban?",
                ],
                isQuestion: true,
              },
            ],
            function: "Competitive Programming",
            position: "Vice",
          };
        case "head":
          return {
            title: "Trưởng ban Lập trình Thi đấu (Competitive Programming)",
            deadline: "02/06/2025",
            description: [
              {
                title: "Mục đích của Ban Lập trình Thi đấu",
                description: [
                  "Với vai trò là Trưởng ban Lập trình Thi đấu, bạn sẽ xây dựng chiến lược phát triển đội ngũ, tổ chức các hoạt động luyện tập, thi đấu và đại diện tổ chức trong các cuộc thi lập trình.",
                ],
                isQuestion: false,
              },
              {
                title: "Mô tả công việc",
                description: [
                  "Xây dựng và định hướng chiến lược phát triển cho Ban Lập trình Thi đấu, đảm bảo phù hợp với mục tiêu chung của tổ chức.",
                  "Quản lý, điều phối toàn bộ hoạt động của ban, phân công nhiệm vụ và giám sát tiến độ luyện tập, thi đấu.",
                  "Chủ trì các cuộc họp, tổng hợp và báo cáo kết quả hoạt động của ban cho Ban lãnh đạo.",
                  "Đại diện ban làm việc với các bộ phận khác trong tổ chức.",
                  "Giải quyết các vấn đề phát sinh, đảm bảo các hoạt động luyện tập, thi đấu diễn ra hiệu quả và đúng tiến độ.",
                  "Đào tạo, truyền cảm hứng và phát triển năng lực cho các thành viên trong ban.",
                  "Đánh giá, cải tiến quy trình luyện tập, thi đấu và đề xuất các giải pháp đổi mới sáng tạo cho ban.",
                  "Tổ chức các buổi luyện tập, thi thử, thảo luận chuyên môn và xây dựng tài liệu, đề thi thử cho ban.",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chung",
                description: [
                  "Học sinh là thành viên của lớp chuyên tin niên khóa 2024-2027 hoặc các niên khóa từ 2025 trở đi",
                  "Đảm bảo thời gian đồng hành cùng tổ chức ít nhất 12 tháng",
                  "Nhiệt tình, chủ động, linh hoạt, sáng tạo và có tinh thần trách nhiệm cao",
                  "Có khả năng giao tiếp, báo cáo hiệu quả, chủ động",
                  "Có khả năng làm việc dưới áp lực và khả năng quản trị cảm xúc tốt",
                  "Có tính tỉ mỉ, cẩn thận cao",
                  "Có khả năng tìm kiếm, nghiên cứu và chắt lọc thông tin tốt",
                  "Có sự nhạy bén trong ngôn ngữ",
                  "Có thể dành 4 – 5 tiếng làm việc trong tuần, 2 – 3 tiếng cuối tuần cho các buổi họp triển khai công việc và làm việc liên ban",
                  "Biết sử dụng các công cụ tiện ích, chẳng hạn như Google Drive, Microsoft Word, Google Docs, Google Sheets",
                ],
                isQuestion: false,
              },
              {
                title: "Yêu cầu chuyên môn",
                description: [
                  "Có kiến thức chuyên sâu về thuật toán, cấu trúc dữ liệu và lập trình thi đấu.",
                  "Thành thạo ít nhất một ngôn ngữ lập trình (C++, Python, Java, v.v.).",
                  "Có kinh nghiệm xây dựng, quản lý và triển khai các hoạt động luyện tập, thi đấu lập trình.",
                  "Có kỹ năng lãnh đạo, quản lý đội nhóm và đào tạo phát triển năng lực lập trình thi đấu.",
                  "Có khả năng tổ chức các buổi luyện tập, thi thử, thảo luận chuyên môn và xây dựng tài liệu, đề thi thử cho ban.",
                  "Ưu tiên ứng viên từng giữ vai trò trưởng ban hoặc quản lý cấp cao trong các hoạt động lập trình thi đấu hoặc có thành tích nổi bật.",
                ],
                isQuestion: false,
              },
              {
                title: "Quyền lợi",
                description: [
                  "Mỗi thành viên được sử dụng một tên miền <tên-thành-viên>.nexuron.dev",
                  "Được tham gia vào các dự án lớn",
                  "Tất cả các dự án nếu tham gia đều được cho phép đưa vào CV",
                  "Được hỗ trợ bởi các chuyên gia trong lĩnh vực",
                  "Được hỗ trợ luyện tập, tham gia các cuộc thi lập trình trong và ngoài nước",
                ],
                isQuestion: false,
              },
              {
                title: "Câu hỏi chuyên môn",
                description: [
                  "Bạn đã từng tham gia cuộc thi lập trình nào chưa? Hãy chia sẻ kinh nghiệm hoặc thành tích của bạn.",
                  "Bạn sẽ làm gì để nâng cao kỹ năng lập trình thuật toán của bản thân và hỗ trợ các thành viên khác trong ban?",
                  "Nếu thành viên trong ban gặp khó khăn khi luyện tập hoặc thi đấu, bạn sẽ hỗ trợ như thế nào?",
                  "Bạn có ý tưởng gì để tổ chức các buổi luyện tập hoặc thi thử hiệu quả hơn cho ban?",
                  "Bạn đã từng xây dựng hoặc đóng góp tài liệu, đề thi thử cho các buổi luyện tập chưa? Hãy chia sẻ kinh nghiệm của bạn.",
                ],
                isQuestion: true,
              },
            ],
            function: "Competitive Programming",
            position: "Head",
          };
        default:
          throw createError({
            statusCode: 404,
            statusMessage: "Not Found",
            message: "Không tìm thấy thông tin về ban này",
          });
      }
      break;
    default:
      throw createError({
        statusCode: 404,
        statusMessage: "Not Found",
        message: "Không tìm thấy thông tin về ban này",
      });
  }
};
