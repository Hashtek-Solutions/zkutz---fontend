import { cn } from "@/lib/utils"
import { Plus } from "lucide-react"
import Image from "next/image"

interface FeatureCardProps {
  title: string
  features: string[]
  className?: string
}

export function FeatureCard({ title, features, className }: FeatureCardProps) {
  return (
    <div className={cn(
      "relative rounded-[32px] bg-gradient-to-br from-zinc-900/90 to-zinc-900/80 p-8 backdrop-blur-sm",
      "shadow-[0_0_40px_rgba(0,0,0,0.3)] h-fit border",
      className
    )}>
      <h2 className="mb-8 text-[35px] md:text-[40px] font-serif text-white leading-tight">{title}</h2>
      <ul className="space-y-7">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
           <Image src="/plus.png" alt="" width={20} height={20} />
            <span className="text-[15px] font-light leading-relaxed text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

