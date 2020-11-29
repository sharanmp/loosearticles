---
title: Best video converter
description: 
#img: 'video_converter.jpg'
alt: Best Video Converter
---

# Best Video Converter
We can all agree that nowadays we don't need any converter for playing weird codecs and their containers that we don't care about. Most OSes can manage them pretty fine. But there are some notorious file formats like .ts which appear once in a while. If you have been downloading files over the internet via torrent or other means, you will know the pain. The other problem which I faced when I needed converters for solving was when android would record audio in a particular format and the application you use to process those audio files need another. It was royally challenging to sit through this converting process using VLC, total video converter and other such cliche apps. 

We have come across at least one video converter in our life. At the very least you might have come across VLC, which by the way is an excellent media player anyone could have asked for. But even VLC has some trouble in seeking .ts files. I saw this especially when I had to browse files over my local shared storages (Sometimes, I watch movies stored on laptop on my smartphone). Although it might look .ts files were made to make life harder, creators had their reasons. 

We have ffmpeg to our rescue. Really, I would go ahead and call it fastest video converter too. But I leave it to your judgement after you use. Lets say you want to convert a .ts file say filename.ts to say .mp4 format, then you have to go to power shell or command prompt (*windows* + x and choose your option) and copy-paste the command below.

` ffmpeg -i "filename.ts" -vcodec copy -acodec copy ""filename.mp4" `

Thats it and within few seconds (or minutes depending on the size of the file) you have the file in a format you are more familiar with. You can convert all .ts files in a folder to .mp4 files like this:

` for %%f in (*.ts) do call ffmpeg -i "%%~f" -vcodec copy -acodec copy "%%~nf.mp4" `

If you use it frequently, create a .bat file and paste the above command and save it. Just double click this .bat file and it will automatically convert all the files in that directory. You can create another .bat file to delete all .ts files after conversion. With two double click conversion sorted!
