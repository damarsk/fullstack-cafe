import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface User {
  id: string;
  name: string;
  email: string;
  photo?: string | null;
}

interface ProfilePhotoProps {
  user: User;
  onEdit: () => void;
}

export default function ProfilePhoto({ user, onEdit }: ProfilePhotoProps) {
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardContent className="flex flex-col items-center text-center space-y-4 p-6">
        <Avatar className="w-24 h-24">
          <AvatarImage src={user.photo ?? undefined} />
          <AvatarFallback>
            {user.name?.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>

        <div>
          <h2 className="text-lg font-semibold">{user.name}</h2>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>

        <Button onClick={onEdit} className="w-full rounded-xl">
          Edit Profile
        </Button>
      </CardContent>
    </Card>
  );
}
