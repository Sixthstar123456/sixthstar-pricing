"use client"
import { Card, CardContent } from "./card-bento"

export function BentoGrid() {
  const items = [
    {
      title: "365 Days Support",
      content:
        "Need urgent help at 3 o'clock in the morning? You're not on your own. Square Brothers Support specialists are available to handle emergencies 24 hours a day, 7 days a week, 365 days a year",
      image: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747726713/Untitled_design_5_ahjqgb.gif",
      color: "bg-blue-100 shadow-lg",
      className: "md:col-span-1 md:row-span-1"
    },
    {
      title: " 1 Click Installer",
      content:
        "Softaculous Auto Installer is the leading Auto Installer having 426 great scripts, 1115 PHP Classes and we are still adding more. Softaculous is widely used in the Web Hosting industry.",
      image: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747733707/Untitled_design_6_lpnrft.gif",
      color: "bg-blue-200",
      className: "md:col-span-1 md:row-span-1"
    },
    {
      title: "Shared Hosting Features",
      content: (
        <ul className="list-disc list-inside space-y-1">
          <li>Flexible, Easy to Use Control Panel</li>
          <li>Unlimited Sub Domains, FTP Accounts, and Email Accounts</li>
          <li>99.9% Uptime Guarantee and No Contract</li>
        </ul>
      ),
      image: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747733897/Untitled_design_7_en2doj.gif",
      color: "bg-blue-100 shadow-lg",
      className: "md:col-span-1 md:row-span-1"
    },
    {
      title: "Application Hosting",
      content: (
        <ul className="list-disc list-inside space-y-1">
          <li>Install 75+ open-source scripts instantly</li>
          <li>WordPress, Joomla, and Drupal Hosting</li>
          <li>Professional CMS solutions ready to go</li>
        </ul>
      ),
      image: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747734056/Untitled_design_8_qwirwd.gif",
      color: "bg-blue-200",
      className: "md:col-span-1 md:row-span-1"
    },
    {
      title: "Control Panel Features",
      content: "Website Statistics: AWStats, Webalizer, Raw Log Manager  and Softaculous: Instant Shopping Carts, Blogs, Forums",
      image: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747734321/Untitled_design_9_uiwxsf.gif",
      color: "bg-blue-200",
      className: "md:col-span-2 md:row-span-1"
    },
    {
      title: "Programming Language",
      content: (
        <ul className="list-disc list-inside space-y-1">
          <li>Language: CGI, Fast CGI, PHP 4.x - 8.x, Perl, SSI</li>
          <li>Programming Modules: Curl, CPAN, GD Library, ImageMagick</li>
          <li>System Management: Cron Job Scheduling</li>
        </ul>
      ),
      image: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747734521/Untitled_design_10_izrv52.gif",
      color: "bg-blue-100 shadow-lg",
      className: "md:col-span-1 md:row-span-1"
    },
    {
      title: "Email Features",
      content: (
        <ul className="list-disc list-inside space-y-1">
          <li>WebMail access via Horde & SquirrelMail</li>
          <li>Autoresponders, Mail Forwards, Mailing Lists</li>
          <li>Enterprise-grade spam protection</li>
        </ul>
      ),
      image: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747734747/Untitled_design_11_c7sukj.gif",
      color: "bg-blue-300 shadow-lg",
      className: "md:col-span-1 md:row-span-1"
    },
    {
      title: "Database Features",
      content: (
        <ul className="list-disc list-inside space-y-1">
          <li>MySQL Databases (up to 1GB)</li>
          <li>phpMyAdmin access to manage databases</li>
          <li>50 concurrent connections</li>
        </ul>
      ),
      image: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747736572/Untitled_design_13_j0tqqi.gif",
      color: "bg-blue-300 shadow-lg",
      className: "md:col-span-1 md:row-span-1"
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto max-w-5xl mx-auto">
      {items.map((item, index) => (
        <BentoItem
          key={index}
          title={item.title}
          content={item.content}
          image={item.image}
          color={item.color}
          className={item.className}
        />
      ))}
    </div>
  )
}

function BentoItem({ title, content, image, color, className = "" }) {
  return (
    <div className={`relative h-[250px] perspective-1000 ${className} group`}>
      <div
        className={`
          absolute w-full h-full transition-transform duration-500 
          preserve-3d group-hover:rotate-y-180
        `}
      >
        {/* Front side */}
        <Card
          className={`
            absolute w-full h-full backface-hidden
            overflow-hidden text-black
          `}
        >
          <CardContent
            className={`p-0 h-full ${color} flex flex-col items-center justify-center text-white`}
          >
            <div className="mb-1">
              <img src={image} alt="icon" className="h-44 w-44" />
            </div>
            <h3 className="text-xl font-bold text-center text-black">{title}</h3>
          </CardContent>
        </Card>

        {/* Back side */}
        <Card
          className={`
            absolute w-full h-full backface-hidden rotate-y-180
          `}
        >
          <CardContent className="flex items-center justify-center h-full">
            <p className="text-center">{content}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

