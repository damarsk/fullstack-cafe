import { Card, CardContent } from '@/components/ui/card'
import { ChevronRight } from 'lucide-react'

export default function EditProfile({ onEdit }: { onEdit: () => void }) {
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardContent className="font-semibold flex justify-between">
        <h1>Edit Profile</h1>
        <ChevronRight />
      </CardContent>
      <CardContent className="font-semibold flex justify-between">
        <h1>Change Password</h1>
        <ChevronRight />
      </CardContent>
    </Card>
  )
}
