import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Calendar, Download, GraduationCap, Users } from "lucide-react"
import Image from "next/image"
import { AdminSidebar } from "@/components/admin-sidebar"
import { AdminHeader } from "@/components/admin-header"

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />

      <div className="flex-1 flex flex-col">
        <AdminHeader />

        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
            <Button className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Export Report
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              {
                title: "Total Students",
                value: "4,218",
                icon: Users,
                color: "bg-blue-500",
                change: "+12% from last year",
              },
              {
                title: "Academic Staff",
                value: "196",
                icon: GraduationCap,
                color: "bg-green-500",
                change: "+8% from last year",
              },
              {
                title: "Programs",
                value: "32",
                icon: BookOpen,
                color: "bg-purple-500",
                change: "2 new programs added",
              },
              { title: "Upcoming Events", value: "14", icon: Calendar, color: "bg-orange-500", change: "3 this week" },
            ].map((stat, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                      <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                      <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
                    </div>
                    <div className={`${stat.color} p-3 rounded-full text-white`}>
                      <stat.icon className="h-6 w-6" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Tabs defaultValue="overview" className="mb-8">
            <TabsList className="mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="admissions">Admissions</TabsTrigger>
              <TabsTrigger value="academics">Academics</TabsTrigger>
              <TabsTrigger value="finance">Finance</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Student Enrollment Trends</CardTitle>
                    <CardDescription>Student enrollment over the past 5 years</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80 relative">
                      <Image
                        src="https://quickchart.io/chart?c={type:'bar',data:{labels:['2019','2020','2021','2022','2023'],datasets:[{label:'National Diploma',backgroundColor:'rgba(0,51,102,0.8)',data:[2105,2340,2780,3120,3450]},{label:'Higher National Diploma',backgroundColor:'rgba(255,127,0,0.8)',data:[320,380,450,620,768]}]}}"
                        alt="Student Enrollment Chart"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Faculty Distribution</CardTitle>
                    <CardDescription>Distribution of faculty across departments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80 relative">
                      <Image
                        src="https://quickchart.io/chart?c={type:'pie',data:{labels:['Computing','Engineering','Technology','Business','Applied Sciences','Creative Arts'],datasets:[{data:[42,38,45,32,25,14],backgroundColor:['rgba(54,162,235,0.8)','rgba(255,99,132,0.8)','rgba(75,192,192,0.8)','rgba(255,159,64,0.8)','rgba(153,102,255,0.8)','rgba(255,205,86,0.8)']}]}}"
                        alt="Faculty Distribution Chart"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 gap-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Student Demographics</CardTitle>
                    <CardDescription>Student distribution by gender and origin</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="h-64 relative">
                        <Image
                          src="https://quickchart.io/chart?c={type:'doughnut',data:{labels:['Male','Female'],datasets:[{data:[58,42],backgroundColor:['rgba(54,162,235,0.8)','rgba(255,99,132,0.8)']}]},options:{plugins:{doughnutLabel:{labels:[{text:'Gender',font:{size:20}},{text:'Distribution',font:{size:16}}]}}}}"
                          alt="Gender Distribution Chart"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="h-64 relative">
                        <Image
                          src="https://quickchart.io/chart?c={type:'doughnut',data:{labels:['Kano State','Other Northern States','Southern States','International'],datasets:[{data:[45,30,20,5],backgroundColor:['rgba(54,162,235,0.8)','rgba(75,192,192,0.8)','rgba(255,159,64,0.8)','rgba(153,102,255,0.8)']}]},options:{plugins:{doughnutLabel:{labels:[{text:'Student',font:{size:20}},{text:'Origin',font:{size:16}}]}}}}"
                          alt="Student Origin Chart"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="admissions">
              <div className="grid grid-cols-1 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Admission Statistics (2023/2024)</CardTitle>
                    <CardDescription>Current admission cycle statistics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                      {[
                        { label: "Applications", value: "7,842", change: "+18% from last year" },
                        { label: "Admitted", value: "2,156", change: "+12% from last year" },
                        { label: "Enrollment Rate", value: "86%", change: "+4% from last year" },
                        { label: "Scholarship Recipients", value: "324", change: "+15% from last year" },
                      ].map((stat, index) => (
                        <div key={index} className="bg-gray-50 p-4 rounded-md">
                          <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                          <p className="text-2xl font-bold mt-1">{stat.value}</p>
                          <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
                        </div>
                      ))}
                    </div>

                    <div className="h-80 relative mb-6">
                      <Image
                        src="https://quickchart.io/chart?c={type:'bar',data:{labels:['Computing','Engineering','Technology','Business','Applied Sciences','Creative Arts'],datasets:[{label:'Applications',backgroundColor:'rgba(54,162,235,0.8)',data:[1850,1620,1940,1280,720,432]},{label:'Admitted',backgroundColor:'rgba(75,192,192,0.8)',data:[520,480,380,420,240,116]}]},options:{plugins:{datalabels:{anchor:'end',align:'top',formatter:'%d',font:{weight:'bold'}}}}}"
                        alt="Applications by Faculty Chart"
                        fill
                        className="object-contain"
                      />
                    </div>

                    <h4 className="font-medium mb-4">Recent Applications</h4>
                    <div className="border rounded-md">
                      <div className="grid grid-cols-5 bg-gray-50 p-3 border-b">
                        <div className="font-medium">Name</div>
                        <div className="font-medium">Program</div>
                        <div className="font-medium">JAMB Score</div>
                        <div className="font-medium">Date</div>
                        <div className="font-medium">Status</div>
                      </div>
                      {[
                        {
                          name: "Amina Ibrahim",
                          program: "Computer Science",
                          score: "268",
                          date: "2023-06-15",
                          status: "Pending",
                        },
                        {
                          name: "Mohammed Yusuf",
                          program: "Civil Engineering",
                          score: "302",
                          date: "2023-06-14",
                          status: "Approved",
                        },
                        {
                          name: "Fatima Abubakar",
                          program: "Civil Engineering",
                          score: "285",
                          date: "2023-06-13",
                          status: "Pending",
                        },
                        {
                          name: "Ibrahim Hassan",
                          program: "Law",
                          score: "245",
                          date: "2023-06-12",
                          status: "Rejected",
                        },
                        {
                          name: "Zainab Musa",
                          program: "Economics",
                          score: "278",
                          date: "2023-06-11",
                          status: "Approved",
                        },
                        {
                          name: "Usman Abdullahi",
                          program: "Nursing Science",
                          score: "290",
                          date: "2023-06-10",
                          status: "Approved",
                        },
                        {
                          name: "Aisha Mohammed",
                          program: "Accounting",
                          score: "262",
                          date: "2023-06-09",
                          status: "Pending",
                        },
                      ].map((application, index) => (
                        <div key={index} className="grid grid-cols-5 p-3 border-b last:border-0">
                          <div>{application.name}</div>
                          <div>{application.program}</div>
                          <div>{application.score}</div>
                          <div>{application.date}</div>
                          <div>
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${
                                application.status === "Approved"
                                  ? "bg-green-100 text-green-800"
                                  : application.status === "Rejected"
                                    ? "bg-red-100 text-red-800"
                                    : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {application.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="academics">
              <div className="grid grid-cols-1 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Academic Programs</CardTitle>
                    <CardDescription>Overview of academic programs</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      {[
                        { label: "Undergraduate", value: "22", change: "2 new programs" },
                        { label: "Postgraduate", value: "8", change: "1 new program" },
                        { label: "Certificate", value: "2", change: "No change" },
                      ].map((stat, index) => (
                        <div key={index} className="bg-gray-50 p-4 rounded-md">
                          <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                          <p className="text-2xl font-bold mt-1">{stat.value}</p>
                          <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
                        </div>
                      ))}
                    </div>

                    <div className="h-80 relative mb-6">
                      <Image
                        src="https://quickchart.io/chart?c={type:'horizontalBar',data:{labels:['Computing','Engineering','Technology','Business','Applied Sciences','Creative Arts'],datasets:[{label:'Undergraduate',backgroundColor:'rgba(54,162,235,0.8)',data:[5,5,4,4,3,1]},{label:'Postgraduate',backgroundColor:'rgba(255,159,64,0.8)',data:[2,2,2,1,1,0]}]},options:{indexAxis:'y'}}"
                        alt="Programs by Faculty Chart"
                        fill
                        className="object-contain"
                      />
                    </div>

                    <h4 className="font-medium mb-4">Programs by Faculty</h4>
                    <div className="border rounded-md">
                      <div className="grid grid-cols-4 bg-gray-50 p-3 border-b">
                        <div className="font-medium">Faculty</div>
                        <div className="font-medium">Programs</div>
                        <div className="font-medium">Students</div>
                        <div className="font-medium">Academic Staff</div>
                      </div>
                      {[
                        {
                          faculty: "Computing",
                          programs:
                            "B.Sc. Computer Science, B.Sc. Software Engineering, B.Sc. Cyber Security, B.Sc. Information Technology, B.Sc. Artificial Intelligence, M.Sc. Computer Science, M.Sc. Information Systems",
                          students: 840,
                          staff: 42,
                        },
                        {
                          faculty: "Engineering",
                          programs:
                            "B.Eng. Civil Engineering, B.Eng. Electrical Engineering, B.Eng. Mechanical Engineering, B.Eng. Petroleum Engineering, B.Eng. Chemical Engineering, M.Eng. Civil Engineering, M.Eng. Electrical Engineering",
                          students: 720,
                          staff: 38,
                        },
                        {
                          faculty: "Technology",
                          programs:
                            "B.Sc. Computer Science, B.Sc. Software Engineering, B.Sc. Cyber Security, B.Sc. Information Technology, B.Sc. Artificial Intelligence, M.Sc. Computer Science, M.Sc. Information Systems",
                          students: 650,
                          staff: 45,
                        },
                        {
                          faculty: "Business",
                          programs:
                            "B.Sc. Accounting, B.Sc. Business Administration, B.Sc. Economics, B.Sc. Banking & Finance, B.Sc. Entrepreneurship, MBA Business Administration",
                          students: 780,
                          staff: 32,
                        },
                        {
                          faculty: "Applied Sciences",
                          programs:
                            "B.Sc. Medical Laboratory Science, B.Sc. Physiotherapy, B.Sc. Public Health, M.Sc. Public Health, M.Sc. Nursing",
                          students: 520,
                          staff: 25,
                        },
                        {
                          faculty: "Creative Arts",
                          programs:
                            "B.Sc. Mass Communication, B.Sc. Political Science, B.Sc. Sociology, B.Sc. International Relations, B.Sc. Peace & Conflict Resolution, M.Sc. International Relations",
                          students: 332,
                          staff: 14,
                        },
                      ].map((faculty, index) => (
                        <div key={index} className="grid grid-cols-4 p-3 border-b last:border-0">
                          <div className="font-medium">{faculty.faculty}</div>
                          <div className="text-sm">{faculty.programs}</div>
                          <div>{faculty.students}</div>
                          <div>{faculty.staff}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="finance">
              <Card>
                <CardHeader>
                  <CardTitle>Financial Overview (2022-2023)</CardTitle>
                  <CardDescription>Polytechnic financial statistics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                    {[
                      { label: "Total Revenue", value: "₦1.28B", change: "+15% from last year" },
                      { label: "Expenses", value: "₦865M", change: "+8% from last year" },
                      { label: "Scholarships", value: "₦142M", change: "+18% from last year" },
                      { label: "Research Grants", value: "₦95M", change: "+25% from last year" },
                    ].map((stat, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-md">
                        <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                        <p className="text-2xl font-bold mt-1">{stat.value}</p>
                        <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="h-80 relative">
                      <Image
                        src="https://quickchart.io/chart?c={type:'line',data:{labels:['Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr','May','Jun'],datasets:[{label:'Revenue',borderColor:'rgba(54,162,235,0.8)',backgroundColor:'rgba(54,162,235,0.1)',data:[85,92,125,132,78,98,145,132,110,120,95,68]},{label:'Expenses',borderColor:'rgba(255,99,132,0.8)',backgroundColor:'rgba(255,99,132,0.1)',data:[65,72,78,75,82,80,72,68,74,78,85,86]}]},options:{elements:{line:{tension:0.4}}}}"
                        alt="Monthly Revenue vs Expenses Chart"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="h-80 relative">
                      <Image
                        src="https://quickchart.io/chart?c={type:'pie',data:{labels:['Tuition & Fees','Government Grants','Private Donations','Research Grants','Investment Income','Other'],datasets:[{data:[68,12,8,7,3,2],backgroundColor:['rgba(54,162,235,0.8)','rgba(75,192,192,0.8)','rgba(255,159,64,0.8)','rgba(153,102,255,0.8)','rgba(255,205,86,0.8)','rgba(201,203,207,0.8)']}]}}"
                        alt="Revenue Sources Chart"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <div className="h-80 relative mb-6">
                    <Image
                      src="https://quickchart.io/chart?c={type:'bar',data:{labels:['Academic Staff','Admin Staff','Facilities','Research','Student Services','IT Infrastructure','Marketing','Other'],datasets:[{label:'Expenses (Millions ₦)',backgroundColor:['rgba(54,162,235,0.8)','rgba(75,192,192,0.8)','rgba(255,159,64,0.8)','rgba(153,102,255,0.8)','rgba(255,205,86,0.8)','rgba(255,99,132,0.8)','rgba(201,203,207,0.8)','rgba(54,162,235,0.4)'],data:[320,180,125,95,65,45,25,10]}]},options:{plugins:{datalabels:{anchor:'end',align:'top',formatter:'₦%d M',font:{weight:'bold'}}}}}"
                      alt="Expense Breakdown Chart"
                      fill
                      className="object-contain"
                    />
                  </div>

                  <h4 className="font-medium mb-4">Recent Financial Transactions</h4>
                  <div className="border rounded-md">
                    <div className="grid grid-cols-5 bg-gray-50 p-3 border-b">
                      <div className="font-medium">Description</div>
                      <div className="font-medium">Category</div>
                      <div className="font-medium">Date</div>
                      <div className="font-medium">Amount</div>
                      <div className="font-medium">Status</div>
                    </div>
                    {[
                      {
                        description: "Faculty Salaries - June",
                        category: "Payroll",
                        date: "2023-06-28",
                        amount: "₦42.5M",
                        status: "Completed",
                      },
                      {
                        description: "New Laboratory Equipment",
                        category: "Facilities",
                        date: "2023-06-22",
                        amount: "₦18.2M",
                        status: "Completed",
                      },
                      {
                        description: "Student Tuition Payments",
                        category: "Revenue",
                        date: "2023-06-15",
                        amount: "₦85.4M",
                        status: "Completed",
                      },
                      {
                        description: "Campus Maintenance",
                        category: "Facilities",
                        date: "2023-06-10",
                        amount: "₦12.8M",
                        status: "Completed",
                      },
                      {
                        description: "Research Grant - AI Project",
                        category: "Research",
                        date: "2023-06-05",
                        amount: "₦24.6M",
                        status: "Pending",
                      },
                      {
                        description: "Library Resources",
                        category: "Academic",
                        date: "2023-06-02",
                        amount: "₦8.5M",
                        status: "Completed",
                      },
                      {
                        description: "IT Infrastructure Upgrade",
                        category: "IT",
                        date: "2023-05-28",
                        amount: "₦15.2M",
                        status: "In Progress",
                      },
                    ].map((transaction, index) => (
                      <div key={index} className="grid grid-cols-5 p-3 border-b last:border-0">
                        <div>{transaction.description}</div>
                        <div>{transaction.category}</div>
                        <div>{transaction.date}</div>
                        <div>{transaction.amount}</div>
                        <div>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              transaction.status === "Completed"
                                ? "bg-green-100 text-green-800"
                                : transaction.status === "In Progress"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {transaction.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent News & Announcements</CardTitle>
                <CardDescription>Latest news and announcements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "FPK Signs MOU with Industry Partners",
                      date: "June 18, 2023",
                      excerpt:
                        "FPK has signed a Memorandum of Understanding with several industry leaders for practical training, internship opportunities, and curriculum development.",
                    },
                    {
                      title: "Faculty Development Workshop on AI in Education",
                      date: "June 14, 2023",
                      excerpt:
                        "A workshop on integrating artificial intelligence in teaching methodologies will be held next week for all academic staff.",
                    },
                    {
                      title: "FPK Students Win National Innovation Competition",
                      date: "June 8, 2023",
                      excerpt:
                        "A team of Computer Science students won first place at the National Technical Innovation Competition with their AI-powered healthcare solution.",
                    },
                    {
                      title: "New Academic Programs Approved by NBTE",
                      date: "May 30, 2023",
                      excerpt:
                        "The National Board for Technical Education has approved three new diploma programs to commence in the next academic session.",
                    },
                    {
                      title: "FPK Receives Research Grant for Renewable Energy",
                      date: "May 25, 2023",
                      excerpt:
                        "The Department of Engineering has received a ₦35M research grant for renewable energy solutions in Northern Nigeria.",
                    },
                  ].map((news, index) => (
                    <div key={index} className="border-b last:border-0 pb-4 last:pb-0">
                      <h4 className="font-medium">{news.title}</h4>
                      <p className="text-sm text-gray-500 mb-1">{news.date}</p>
                      <p className="text-sm">{news.excerpt}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>Events scheduled in the coming weeks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "2023/2024 Orientation Week",
                      date: "July 10-15, 2023",
                      location: "Main Campus",
                      description:
                        "Orientation program for new students including campus tours, registration, and introductory sessions.",
                    },
                    {
                      title: "International Conference on Technical Education",
                      date: "July 20-22, 2023",
                      location: "FPK Conference Center",
                      description:
                        "Conference featuring speakers from various sectors discussing innovations in technical education and implementation strategies.",
                    },
                    {
                      title: "Alumni Homecoming Weekend",
                      date: "August 5-6, 2023",
                      location: "Polytechnic Hall & Sports Complex",
                      description:
                        "Annual alumni reunion featuring networking events, sports competitions, and gala dinner.",
                    },
                    {
                      title: "Faculty Research Symposium",
                      date: "August 12, 2023",
                      location: "Science Building Auditorium",
                      description: "Presentation of research findings by faculty members across all departments.",
                    },
                    {
                      title: "Career Fair 2023",
                      date: "August 18-19, 2023",
                      location: "Student Center",
                      description:
                        "Annual career fair with over 50 companies offering internship and job opportunities to students and graduates.",
                    },
                  ].map((event, index) => (
                    <div key={index} className="flex items-start border-b last:border-0 pb-4 last:pb-0">
                      <div className="bg-blue-100 text-blue-800 p-2 rounded-md mr-4">
                        <Calendar className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium">{event.title}</h4>
                        <p className="text-sm text-gray-500">{event.date}</p>
                        <p className="text-sm text-gray-500">{event.location}</p>
                        <p className="text-sm mt-1">{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

