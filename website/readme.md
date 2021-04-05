Please create a plain text file, named README.md (or txt) file in your root directory and with comments about the lab, justifications for your chosen methods/styles/tech, etc. In the file, include the correct URL for your site. 

comments about the lab:
    I felt like this was a great introduction to creating a website, espicially after the previous lab with the resume. It got me more familiar with importing a stylesheet and also using a ftp client. I did experience some problems with sshing into the server through vscode to edit the files there, sometimes the website would not import the stylesheet at all and just revert to default css.
    Another thing, this just got me thinking about websites like google where they have automatically (i think) generated pages of search results that are all formatted the same way, it must be interesting to see how that system works

url: https://afsws.rpi.edu/AFS/home/94/liuj42/public_html/lab%203/iit/ (should work now)

the padding class was for making space in my footer between each element

<!-- Index.html (file)
    Resume (folder)
        → Contains the resume html file and the necessary files for it
    Pages (folder)
        → Contains the html pages of other stuff
        styles.css (file)
            → stylesheet
        projects.html (file)
            → links to my previous labs
        Frequently used links
            → Links that i use often
        Sitemap
            → Contains all of the links to each of the html page -->
updated diagram:
Index.html
    Resume (folder)
        → Contains the resume html file and the necessary files for it
        images (folder) 
        → contains the background image of the resume
            bg.png
            → the background image
            noise.jpg
            → another background image
        liuj42-JamesLiu-resume.html
        → my resume
    Pages (folder)
        → Contains the html pages of other stuff
        images (folder)
        → Contains the background image for the website
            bg2.png
            → the background image
            bg.png
            → another background image
        projects (folder)
        → Contains 4 html files, each of them for each lab that I have done (so far)
            resouces (folder)
            → Contains the JQuery code
            lab1.html
            → Contains a link to the first lab, alongside with a brief description of it
            lab2.html
            → Contains a link to the second lab, alongside with a brief description of it
            lab3.html
            → Contains a link to the third lab (which is just the index), alongside with a brief descrption of it
            lab4.html
            → Contains a link to (both the atom and rss feeds for) the fourth lab, alongside with a brief descrption of it
            AtomFeed.xml
            → The atom feed
            RSSFeed.xml
            → the RSS feed
            lab5.html
            → Contains a link to the fifth lab, alongside with a brief description of it.
            lab5.js
            → the javascript for the javascript lab
            lab6.html
            → Contains the sixth lab, alongside with a brief description of it.
            lab6.css
            → The stylesheet for the lab 6 page, has some specific parts for it
            lab6.js
            → the javascript for the lab 6 page
        styles.css (file)
            → stylesheet
        projects.html (file)
            → links to my previous labs
        Frequently used links
            → Links that i use often
        Sitemap
            → Contains all of the links to each of the html page

Everything has a header and a footer, header contains links to all pages (except sitemap) and footer contains personal info and link to sitemap
the current page that the user is on is also highlighted on the header/footer.
