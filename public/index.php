<!DOCTYPE html>
<!--
 __    __  _______    ______    ______    ______    __   ______
/\ \  / / /\__  __\  /\  __ \  /\  ___\  /\  ___\  /\_\ /\  ___\
\ \ \/ /  \///\ \//  \ \ \ \ \ \ \ \____ \ \  ___\ \/_/ \ \___  \
 \ \__/     /\_____\  \ \_\ \_\ \ \_____\ \ \_____\      \/\_____\
  \/_/      \/_____/   \/_/\/_/  \/_____/  \/_____/       \/_____/

                          Dev portfolio.
-->
<html lang="en">
  <head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href='https://fonts.googleapis.com/css?family=Nixie+One%7CLato:300' rel='stylesheet' type='text/css'>

    <!-- Original Gangsters -->
    <meta property="og:url" content="http://vincentsmuda.com" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Vincent Smuda. I write Javascript" />
    <meta property="og:site_name" content="Vincent Smuda. I write Javascript" />
    <meta property="og:description" content="Continuously writing Javascript, SCSS, HTML, and PHP." />
    <meta property="og:image" content="http://vincentsmuda.com/assets/images/og-image.png?v=4" />
    <meta property="we are watching" content="you" />

    <!-- Favicons -->
    <link rel="apple-touch-icon" sizes="57x57" href="/assets/images/apple-icon-57x57.png?v=2">
    <link rel="apple-touch-icon" sizes="60x60" href="/assets/images/apple-icon-60x60.png?v=2">
    <link rel="apple-touch-icon" sizes="72x72" href="/assets/images/apple-icon-72x72.png?v=2">
    <link rel="apple-touch-icon" sizes="76x76" href="/assets/images/apple-icon-76x76.png?v=2">
    <link rel="apple-touch-icon" sizes="114x114" href="/assets/images/apple-icon-114x114.png?v=2">
    <link rel="apple-touch-icon" sizes="120x120" href="/assets/images/apple-icon-120x120.png?v=2">
    <link rel="apple-touch-icon" sizes="144x144" href="/assets/images/apple-icon-144x144.png?v=2">
    <link rel="apple-touch-icon" sizes="152x152" href="/assets/images/apple-icon-152x152.png?v=2">
    <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/apple-icon-180x180.png?v=2">
    <link rel="icon" type="image/png" sizes="192x192"  href="/assets/images/android-icon-192x192.png?v=2">
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon-32x32.png?v=2">
    <link rel="icon" type="image/png" sizes="96x96" href="/assets/images/favicon-96x96.png?v=2">
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon-16x16.png?v=2">
    <link rel="manifest" href="/assets/images/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/assets/images/ms-icon-144x144.png?v=2">
    <meta name="theme-color" content="#ffffff">

    <title>Vincent Smuda. I write Javascript.</title>

    <!--
      These are the styles needed on pageload.
      The rest will be loaded via main.js
    -->
    <style media="screen">
      .main{display: none;}
      @keyframes purpleIn {
        from {background: #fff;}
        to {background: #8956a2;}
      }
      body{
        animation-duration: 0.5s;
        animation-fill-mode: both;
        animation-name: purpleIn;
        background: #fff;
      }
    </style>

  </head>

  <body id="body" class="body">

    <main id="main" class="main">

      <div class="content">

        <h1 class="title animated">
          <span class="title__pre">
            (Vincent Smuda)
          </span><br/>
          I write Javascript, SCSS, HTML, and PHP.
        </h1>

        <ul>
          <?php
            foreach ([
              'throwmail@vincentsmuda.com' => 'mailto:throwmail@vincentsmuda.com',
              'github' =>	 'https://github.com/thefreshvince" target="_blank',
              'npm' => 'https://www.npmjs.com/~vincentsmuda" target="_blank',
              'linkedin' => 'https://www.linkedin.com/in/vincent-smuda-80b27014/" target="_blank',
              'CV <span class="shortcut browser__osx">(Cmd + Opt + j)</span><span class="shortcut browser__other">(Ctrl + Shift + J)</span>' => '/assets/documents/resume.pdf?v=2" target="_blank'
            ] as $text => $link)
              echo "
                <li class=\"animated\">
                  <a href=\"$link\">$text</a>
                </li>
              ";
          ?>
        </ul>

      </div>

    </main>

    <!-- our main bundle js -->
    <script src="/assets/js/bundle.js" charset="utf-8"></script>

    <!-- Analytics -->
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-53680352-1', 'auto');
      ga('send', 'pageview');
    </script>

  </body>
</html>
