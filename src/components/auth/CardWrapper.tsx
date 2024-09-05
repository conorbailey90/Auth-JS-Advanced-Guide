'use client'

import { Card, CardContent, CardHeader, CardFooter } from "../ui/card"
import { Social } from "@/components/auth/Social"
import { Header } from "@/components/auth/Header"
import { BackButton } from "./BackButton"

interface CardWrapperProps{
  children: React.ReactNode,
  headerLabel: string,
  backButtonLabel: string,
  backButtonHref: string,
  showSocial?: boolean
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label={headerLabel} />   
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref}/>
  
      </CardFooter>
     

    </Card>
  )
}
