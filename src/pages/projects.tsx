import { SelectedTitle } from '../components/common/selected-title'
import { ProjectDescription } from '../components/projects'

export default function Projects() {
  return (
    <>
      <SelectedTitle title='Selected projects' />
      <ProjectDescription
        year=' 2023 - Now'
        name='MentorGo'
        description='With MentorGo, mentors and teachers can efficiently manage each student individual development. The platform offers personalized resources for each learning stage, allowing mentors to create challenges, write articles, register courses and create rooms. If you already provide some kind of mentoring or private lessons, increase the efficiency of your teachings and take your students to the next level with MentorGo.'
        image='/projects/mentorgo.png'
        githubUrl=''
        projectUrl='https://mentor-go.vercel.app/'
      />
      <ProjectDescription
        year=' 2023 - Now'
        name='Danilo Menezes'
        description='I developed this site to centralize my personal projects, write articles and improve my skills. I used Next js and Chakra Ui.'
        image='/projects/danilomenezes.png'
        githubUrl='https://github.com/jovemdan/danilo-menezes'
        projectUrl='https://danilo-menezes.vercel.app/'
      />
      <ProjectDescription
        year=' 2021 - 2022'
        name='My Finances'
        description='I made some contributions in this project together with my friend. In this system it is possible to control your finances in a simple way. We use Next js, Chakra Ui and MongoDb.'
        image='/projects/myfinances.png'
        githubUrl='https://github.com/darkstudio-apps/my-finances'
        projectUrl='https://www.my-finances.app/'
      />
    </>
  )
}
