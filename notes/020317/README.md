# CSCI 2254 Web App Development

### Spring 2017

**R. Muller**

------

### Lecture Notes: Meeting 7; Friday February 3, 2017

#### Today

1. In Class Lab 

------

This is a two-part flipped-class or lab. Team up with one or two other people to try to reproduce the two web pages displayed in class.

####1. CSS Font Styles & Google Fonts####

Google has a library of various fonts. See:

```
https://fonts.google.com/
```

Once you've picked a font, for example, 'Pangolin', you can link to it as follows:

```html
<head>
  <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Pangolin">
</head>
```
Then you can use it as your font-family, e.g., one might use it in divs:

```css
div {
  font-family: 'Pangolin', serif;
}
```

The [image displayed](./one/lab.html) is a **div** with width 50%. The top margin (margin-top) is 150px while the left margin is auto. The top and bottom paddings are both 180px.



---

#### 2. Flex Layouts & Photographs####

There are a number of web sites offering access to photography. [Unsplash](https://unsplash.it/images) is popular. You can access a randomly selected 400x400 pixel image from Unsplash that you can use as an element background. E.g., making a class **a**:

```css
.a {
  background-image: url(https://unsplash.it/400/?random);
}
```

You can access a particular (400 x 400) image by specifying the image number in the URL:

```css
.b {
  background-image: url(https://unsplash.it/400/?image=1074);
}
```

The [image displayed](./two/lab.html) is an 800px wide **div** styled with a top margin of 50px and left and right margins auto. Flex layout is used. This outer div contains four **divs**, two of which are styled with backgrounds using fixed 400x400 photos and two of which are styled with 400x400 background images using the same randomly chosen photo.