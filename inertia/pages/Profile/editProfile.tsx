import { Card, CardContent } from '@/components/ui/card'
import { ChevronRight } from 'lucide-react'

export default function EditProfile({ onEdit }: { onEdit: () => void }) {
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardContent className="font-semibold flex justify-between">
        <h1>Edit Profile</h1>
        <ChevronRight />
      </CardContent>
      <span className="mx-5 border-gray-400 border-b"></span>
      <CardContent className="font-semibold flex justify-between">
        <h1>Change Password</h1>
        <ChevronRight />
      </CardContent>
      <span className="mx-5 border-gray-400 border-b"></span>
      <CardContent className="font-semibold flex justify-between">
        <h1>History Order</h1>
        <ChevronRight />
      </CardContent>
    </Card>
  )
}
