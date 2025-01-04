import styles from '@/app/styles'
import ChangePasswordForm from '@/components/forms/ChangePasswordForm'
import ProtectedRoute from '@/components/ProtectedRoute'
import UserActionComponent from '@/components/UserActionComponent'

const ChangePasswordPage = ({ params }) => {

  return (
    <ProtectedRoute>
      <div className={`${styles.mainSection} items-center justify-center`}>
      <UserActionComponent title='Change User Password' form={<ChangePasswordForm/>}/>
      </div>
    </ProtectedRoute>
  )
}

export default ChangePasswordPage