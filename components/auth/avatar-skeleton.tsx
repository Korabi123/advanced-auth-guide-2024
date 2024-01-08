import { cn } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton"

interface AvatarSkeletonProps {
  className?: string;
}

export const AvatarSkeleton = ({ className }: AvatarSkeletonProps) => {
  return (
    <Skeleton className={cn("w-[100px] h-[20px] rounded-full", className)} />
  )
}