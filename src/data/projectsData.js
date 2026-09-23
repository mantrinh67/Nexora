export const projectsData = [
  {
    id: 'luxeaura',
    title: 'LuxeAura — Sàn Thương Mại Điện Tử & Thời Trang Cao Cấp',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce',
    client: 'LuxeAura Fashion Group',
    year: '2025',
    thumbnailColor: 'from-purple-900/60 via-indigo-950/80 to-slate-950',
    accentColor: '#8B5CF6',
    mockupType: 'browser',
    shortDesc: 'Nền tảng mua sắm thời trang cao cấp với trải nghiệm thanh toán 1-chạm, bộ lọc tức thì và tích hợp đa cổng thanh toán VNPAY/MoMo.',
    problem: 'Website cũ chạy trên nền tảng cũ kỹ tải mất 6.5s, tỷ lệ rớt đơn lúc checkout lên đến 58% trên thiết bị di động.',
    solution: 'Thiết kế lại toàn bộ UI/UX chuẩn phong cách tối giản sang trọng, xây dựng kiến trúc Headless Commerce bằng Next.js, tối ưu hóa One-page checkout mượt mà.',
    impact: [
      { metric: '+185%', label: 'Doanh thu trực tuyến' },
      { metric: '0.8s', label: 'Tốc độ tải trang' },
      { metric: '4.2%', label: 'Tỷ lệ chuyển đổi mua hàng (trước đây 1.4%)' }
    ],
    tags: ['Next.js', 'Tailwind CSS', 'VNPAY / MoMo', 'Node.js', 'Redis'],
    features: [
      'Giao diện mua sắm chuẩn Mobile-first',
      'One-page Checkout giảm 70% thao tác rườm rà',
      'Tìm kiếm gợi ý tức thì với Algolia',
      'Đồng bộ đơn hàng với phần mềm KiotViet'
    ]
  },
  {
    id: 'taskflow',
    title: 'TaskFlow OS — Web App Quản Trị Dự Án & CRM Doanh Nghiệp',
    category: 'webapp',
    categoryLabel: 'Web App & SaaS',
    client: 'TaskFlow Technology',
    year: '2025',
    thumbnailColor: 'from-blue-950/80 via-slate-900 to-indigo-950',
    accentColor: '#3B82F6',
    mockupType: 'dashboard',
    shortDesc: 'Hệ thống SaaS quản lý tiến độ, bảng Kanban kéo thả thời gian thực, quản lý khách hàng (CRM) và chấm công tự động.',
    problem: 'Doanh nghiệp dùng rời rạc 4 phần mềm khác nhau, dữ liệu bị phân mảnh, nhân sự mất trung bình 2 tiếng mỗi ngày để làm báo cáo thủ công.',
    solution: 'Phát triển nền tảng All-in-one tập trung toàn bộ quy trình: Quản lý task, CRM, chat nội bộ, biểu đồ doanh thu trực quan theo thời gian thực.',
    impact: [
      { metric: '-60%', label: 'Thời gian họp báo cáo' },
      { metric: '99.9%', label: 'Thời gian hoạt động liên tục (Uptime)' },
      { metric: '150+', label: 'Doanh nghiệp tin dùng' }
    ],
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Socket.io', 'Tailwind'],
    features: [
      'Bảng Kanban kéo thả linh hoạt 60fps',
      'Biểu đồ KPI và doanh thu thời gian thực',
      'Phân quyền đa cấp bảo mật chuẩn ISO',
      'Thông báo tức thì qua Telegram và Email'
    ]
  },
  {
    id: 'glowspa',
    title: 'GlowSpa — Mobile App Đặt Lịch Làm Đẹp & Chăm Sóc Khách Hàng',
    category: 'mobile',
    categoryLabel: 'Mobile App',
    client: 'Chuỗi Thẩm Mỹ Glow Beauty (8 chi nhánh)',
    year: '2025',
    thumbnailColor: 'from-rose-950/70 via-purple-950/80 to-slate-950',
    accentColor: '#EC4899',
    mockupType: 'mobile',
    shortDesc: 'Ứng dụng di động iOS & Android hỗ trợ khách hàng đặt lịch hẹn thông minh theo kỹ thuật viên, tích điểm thành viên và nhắc hẹn tự động.',
    problem: 'Tỷ lệ khách quên lịch hẹn (no-show) lên đến 25%, nhân viên lễ tân quá tải trả lời tin nhắn inbox vào giờ cao điểm.',
    solution: 'Xây dựng ứng dụng di động Flutter mượt mà, cho phép khách tự chọn cơ sở, chọn kỹ thuật viên, thanh toán cọc và tự động gửi thông báo nhắc lịch.',
    impact: [
      { metric: '30,000+', label: 'Lượt tải trên App Store & Google Play' },
      { metric: '-80%', label: 'Tỷ lệ khách bỏ lỡ lịch hẹn' },
      { metric: '4.9★', label: 'Đánh giá trên Store (1,200+ review)' }
    ],
    tags: ['Flutter', 'iOS & Android', 'Firebase', 'Push Notification', 'VNPay QR'],
    features: [
      'Chọn khung giờ & kỹ thuật viên realtime',
      'Hệ thống Loyalty tích điểm nâng hạng thẻ VIP',
      'Push notification nhắc lịch trước 2 tiếng',
      'Ví voucher khuyến mãi thông minh'
    ]
  },
  {
    id: 'apexcapital',
    title: 'Apex Global — Website Doanh Nghiệp & Cổng Đầu Tư Chuẩn Quốc Tế',
    category: 'corporate',
    categoryLabel: 'Website Doanh nghiệp',
    client: 'Apex Global Capital',
    year: '2025',
    thumbnailColor: 'from-cyan-950/70 via-slate-900 to-slate-950',
    accentColor: '#06B6D4',
    mockupType: 'browser',
    shortDesc: 'Trang web giới thiệu tập đoàn với thiết kế phong cách Futuristic, tương tác 3D mượt mà, chuẩn SEO On-page và đa ngôn ngữ Anh - Việt.',
    problem: 'Website cũ không thể hiện được vị thế của quỹ đầu tư hàng đầu, giao diện vỡ hạt trên màn hình 4K và không tối ưu tìm kiếm Google.',
    solution: 'Thiết kế giao diện hiện đại với hiệu ứng glassmorphism, tối ưu tốc độ đạt 99/100 điểm Google PageSpeed, hệ thống CMS quản lý tin tức độc quyền.',
    impact: [
      { metric: '99/100', label: 'Điểm Google PageSpeed' },
      { metric: 'Top 3', label: 'Từ khóa ngành trên Google' },
      { metric: '+240%', label: 'Yêu cầu tư vấn đầu tư' }
    ],
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Headless CMS', 'SEO Master'],
    features: [
      'Hỗ trợ song ngữ Anh — Việt chuyển đổi tức thì',
      'Điểm SEO On-page tuyệt đối 100/100',
      'Giao diện phản hồi chuẩn xác từ mobile đến màn hình 4K',
      'Tích hợp form bảo mật chống spam Recaptcha v3'
    ]
  },
  {
    id: 'kohidining',
    title: 'Kohi Smart Dining — Web App Quét Mã QR Gọi Món & Thanh Toán Tại Bàn',
    category: 'webapp',
    categoryLabel: 'Web App & SaaS',
    client: 'Chuỗi Cà phê & Nhà hàng Kohi Bistro',
    year: '2025',
    thumbnailColor: 'from-amber-950/70 via-orange-950/80 to-slate-950',
    accentColor: '#F59E0B',
    mockupType: 'mobile',
    shortDesc: 'Giải pháp Web App nhẹ không cần cài đặt, khách quét mã QR tại bàn để xem thực đơn hình ảnh bắt mắt, gọi món và thanh toán trực tiếp.',
    problem: 'Giờ cao điểm khách phải đợi nhân viên phục vụ từ 10-15 phút, sai sót đơn hàng thường xuyên xảy ra khi quán đông khách.',
    solution: 'Xây dựng Web App PWA siêu nhẹ tải trong 0.5s. Khách chỉ cần mở camera quét mã QR trên bàn là order được ngay, đơn lập tức bắn xuống máy in bếp.',
    impact: [
      { metric: '0s', label: 'Thời gian chờ nhân viên gọi món' },
      { metric: '+30%', label: 'Giá trị đơn hàng nhờ gợi ý món kèm' },
      { metric: '0%', label: 'Sai sót đơn hàng' }
    ],
    tags: ['React', 'PWA', 'Tailwind', 'Realtime WebSockets', 'ZaloPay / VietQR'],
    features: [
      'Không cần tải app, chạy trực tiếp trên Safari/Chrome',
      'Tự động in đơn và phát chuông tại quầy bar/bếp',
      'Thanh toán quét mã VietQR tự động xác nhận trong 2 giây',
      'Báo cáo doanh thu theo từng bàn và từng ca'
    ]
  },
  {
    id: 'medicare',
    title: 'MediCare Hub — Hệ Thống Y Tế Từ Xa & Đặt Khám Bác Sĩ Chuyên Khoa',
    category: 'mobile',
    categoryLabel: 'Mobile App',
    client: 'Hệ Thống Y Tế Quốc Tế MediCare',
    year: '2025',
    thumbnailColor: 'from-emerald-950/70 via-teal-950/80 to-slate-950',
    accentColor: '#10B981',
    mockupType: 'browser',
    shortDesc: 'Hệ thống kết hợp Web & Mobile App cho phép bệnh nhân tra cứu hồ sơ bệnh án điện tử, đặt lịch khám theo giờ và tư vấn video 1-1 với bác sĩ.',
    problem: 'Tình trạng xếp hàng chờ đợi tại phòng khám gây mệt mỏi cho người bệnh, hồ sơ bệnh án giấy dễ thất lạc và khó theo dõi tiến trình điều trị.',
    solution: 'Phát triển nền tảng y tế số bảo mật chuẩn HIPAA, tích hợp phòng khám ảo qua WebRTC video call chất lượng cao và đồng bộ đơn thuốc số.',
    impact: [
      { metric: '10,000+', label: 'Cuộc tư vấn y tế thành công' },
      { metric: '-75%', label: 'Thời gian chờ tại cơ sở y tế' },
      { metric: '100%', label: 'Bảo mật hồ sơ chuẩn mã hóa' }
    ],
    tags: ['React', 'React Native', 'WebRTC', 'Node.js', 'MongoDB', 'Docker'],
    features: [
      'Video call tư vấn trực tuyến chất lượng HD',
      'Tra cứu kết quả xét nghiệm và đơn thuốc qua mã bảo mật',
      'Thanh toán viện phí và tiền thuốc trực tuyến',
      'Hệ thống đồng bộ dữ liệu bảo mật chuẩn y tế'
    ]
  }
];
