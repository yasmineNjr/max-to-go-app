import styles from '@/app/styles'
import SendMessageForm from '@/components/forms/SendMessageForm'
import ProtectedRoute from '@/components/ProtectedRoute'
import UserActionComponent from '@/components/UserActionComponent'

const SendMessagePage = ({ params }) => {

  return (
    <ProtectedRoute>
      <div className={`${styles.mainSection} items-center justify-center`}>
      <UserActionComponent title='Send a message to the User' form={<SendMessageForm/>}/>
      </div>
    </ProtectedRoute>
  )
}

export default SendMessagePage