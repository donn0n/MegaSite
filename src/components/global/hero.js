import Link from "next/link"
import { siteConfig } from "@/config/site"
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Icons } from "@/components/icons"
import { buttonVariants } from "../ui/button";
import { useTranslation } from 'react-i18next';

export function SiteHero() {
    const { t } = useTranslation();
    const textarray = [
       {text: "DotA ICCUP", color: "text-red-500", src: "https://cdn.discordapp.com/attachments/1165441669831856209/1166900913894608957/NicePng_csgo-ct-png_2279334.png?ex=654c2c29&is=6539b729&hm=4c158e64337aaa558bad07ed352dce6fe3e666100c9ae31abc7ef13f5343221c&", url: "https://www.youtube.com/watch?v=FFaQWiLZx70"},
    ]
    const cheattags = [
        {text: "Fog Reveal"},
        {text: "Ward Spots"},
        {text: "Rune Control"},
        {text: "Creep Timer"},
        {text: "Tower Range"},
        {text: "Enemy Items"},
        {text: "Illusion Detector"},
        {text: "Skill Cooldowns"},
        {text: "Minimap Icons"},
        {text: "Roshan Timer"},
    ]

    const [text, setText] = useState(textarray[0].text);
    const [color, setColor] = useState(textarray[0].color);
    const [src, setSrc] = useState(textarray[0].src);
    const [index, setIndex] = useState(0);
     
    return <>
       <div className="dark:bg-accent/25 relative overflow-hidden rounded-lg mt-5 bg-black/25 p-3 sm:p-10 mx-4 sm:mx-0">
      <div className="container mx-auto flex items-center justify-center">
        <div className="w-full text-center lg:text-left">
            <h1 className="text-3xl font-bold text-gray-900 truncate dark:text-white !z-10">
                {text}
            </h1>
            <p className="text-gray-600 dark:text-gray-500 my-6">
                Приобретая подписку на месяц и выше, вы получаете эксклюзивный доступ к "MapHack VIP Club", а также:
                <br/><br/>
                ✅ Установку мапхака: Наша команда профессионалов установит мапхак на вашем компьютере через AnyDesk, гарантируя правильную настройку для ICCUP.
                <br/><br/>
                ✅ Оптимизацию Warcraft 3: Мы проведем оптимизацию игры для DotA, чтобы ваш игровой процесс стал ещё более плавным и приятным.
                <br/><br/>
                ⚙️ Компенсацию за проблемы: Мы ценим ваше доверие и гарантируем, что в случае возникновения проблем с работой нашей программы, вы получите компенсацию в виде дополнительного времени использования или расширения подписки.
            </p>
           
            <div className="flex flex-wrap gap-1">
                {cheattags.map((tag, index) => (
                    <div key={index} className="bg-accent/25 dark:bg-accent rounded-full px-2 py-1 text-xs text-gray-600 dark:text-gray-200">
                       <Icons.hash className="h-3 w-3 inline-block mr-1" /> {tag.text}
                    </div>
                ))}
            </div>

            <Link href={textarray[index].url}> 
            <Button
                variant="ghost"
                size="lg"
                className="w-full mt-4 dark:bg-accent text-accent-foreground hover:bg-accent-dark hover:text-accent-foreground-dark bg-accent/30 ring-violet-300 dark:ring-0 ring-2 ring-offset-violet-100 "
                >
                {t('cheats.buy')}
            </Button>
            </Link>
        </div>
        <div className="w-1/2 hidden md:block ml-10">
            <iframe className="w-[27rem] h-80 p-2 " src="https://www.youtube.com/embed/FFaQWiLZx70" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
        </div>
        <div className="absolute top-0 left-0 h-64 -z-10 w-64 bg-accent/50 rounded-full -m-40 -mb-56 dark:bg-accent-dark"></div>
        <div className="absolute bottom-0 right-0 -z-10 h-64 w-64 bg-accent/50 rounded-full -m-32 -mb-48 dark:bg-accent-dark"></div>
    </div>
    </>
}