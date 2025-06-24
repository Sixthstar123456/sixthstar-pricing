import React, { memo } from "react";

const BorderBox3D = memo(({
    heading = "SSL Certificate in chennai​",
    description = "Sixth Star offers a standard ssl certificate in chennai and security protocol that establishes secured connection between your web server and browser. This SSL ensures your customer that all the data and information transmitted are saved under a protected environment. You can increase trust and visibility strength among customers if once the certificate is installed in the web browser",
    theme = "blue",
    padding = "lg",
    expanded = false
}) => {
    const themeColors = {
        blue: "from-blue-500 to-blue-600",
        purple: "from-purple-500 to-purple-600",
        green: "from-green-500 to-green-600"
    };

    const paddingSizes = {
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
        xl: "p-10"
    };

    return (
        <div
            className={`
        relative
        ${paddingSizes[padding]}
        mx-auto
        max-w-2xl
        rounded-xl
        bg-gradient-to-br
        ${themeColors[theme]}
        transform
        perspective-1000
        transition-all
        duration-300
        hover:scale-[1.02]
        hover:shadow-2xl
        cursor-pointer
        before:absolute
        before:inset-0
        before:z-[-1]
        before:translate-x-2
        before:translate-y-2
        before:rounded-xl
        before:bg-black/20
        before:transition-transform
        hover:before:translate-x-3
        hover:before:translate-y-3
        after:absolute
        after:inset-0
        after:z-[-2]
        after:translate-x-4
        after:translate-y-4
        after:rounded-xl
        after:bg-black/10
        after:transition-transform
        hover:after:translate-x-5
        hover:after:translate-y-5
        

      ` }style={{ backgroundImage: "url('https://res.cloudinary.com/dwyn5jgh3/image/upload/v1741241295/6243378_jrktpo.jpg')" }}
            role="article"
            tabIndex="0"
            aria-label={`${heading} section`}
        >
            <div className="relative z-10 space-y-4">
                <h2
                    className="
            text-2xl
            md:text-3xl
            font-bold
            text-white
            tracking-tight
            text-justify
          "
                >
                    {heading}
                </h2>
                <p
                    className="
            text-base
            md:text-lg
            text-white/90
            leading-relaxed
            text-justify
          "
                >
                    {description}
                </p>
            </div>
        </div>
    );
});

BorderBox3D.displayName = "BorderBox3D";

export default BorderBox3D;