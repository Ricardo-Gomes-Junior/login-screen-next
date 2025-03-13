"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Label } from "@radix-ui/react-label";
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import driver1 from "./assets/City driver-bro.svg";
import driver2 from "./assets/sports car-bro.svg";
import driver3 from "./assets/Vehicle Sale-bro.svg";
import Image from "next/image";

export default function Home() {
  const { setTheme } = useTheme();

  return (
    <main className="flex h-screen">
      <div className="bg-primary-foreground w-full h-full flex items-center justify-center p-16">
        <Carousel className="max-w-3xl w-full">
          <CarouselContent>
            <CarouselItem>
              <Image src={driver1} alt="" className="w-full h-full" />
            </CarouselItem>
            <CarouselItem>
              <Image src={driver2} alt="" className="w-full h-full" />
            </CarouselItem>
            <CarouselItem>
              <Image className="w-full h-full p-8" src={driver3} alt="" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <section className="flex items-center justify-center h-full max-w-3xl w-full p-4 bg-secondary">
        <span className="absolute top-4 right-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </span>

        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold tracking-tighter">
              Entre com sua conta:
            </CardTitle>
            <CardDescription>
              Utilize seu e-mail e senha ou GitHub para entrar
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              <Label className="mb-2" htmlFor="email">
                E-mail
              </Label>
              <Input id="email" type="email" placeholder="Insira seu E-mail" />
            </div>
            <div className="mt-2">
              <Label className="mb-2" htmlFor="email">
                Senha
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Insira sua Senha"
              />
            </div>
            <Button
              className="mt-4 w-full bg-[#9973FB] hover:bg-[#8262D6]"
            >
              Entrar
            </Button>
            <Button variant="outline" className="mt-4 w-full">
              <GitHubLogoIcon className="mr-2" />
              Entrar com o GitHub
            </Button>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-muted-foreground">
              Não possui uma conta?{" "}
              <a className="text-primary underline m-1" href="/signup">
                Inscreva-se
              </a>
            </p>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
}
