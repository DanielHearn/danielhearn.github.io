---
layout: design
title:  "Design: ManyTwitch"
date:   2017-06-28 13:00:00 +0100
categories:
  - front-end
  - design
project: manytwitch
goal: To develop a multiple Twitch stream viewer with a modern interface
sub-dir: blog
thumbnail-colour: 2b2f3c
thumbnail: manytwitch-thumbnail.svg
---

--Work in progress--

ManyTwitch is a multiple Twitch stream viewer I developed using AngularJS and CSS variables. This web app allows users view up to six Twitch livestreams at once in two layouts depending on if they want to focus on just the livestreams with one specific stream's chat or watch all the chats along with their streams.

The top menu bar allows the user to add a new stream, change their current layout, and manage their currently viewed streams by refreshing a certain stream or removing a stream, this gives the user greater control of their stream experience directly from the menu bar without needing multiple clicks.

Both the menu bar and the chat windows can have their visibility toggled via their corresponding arrow buttons, this is for users that want to maximise their screen space to the streams.

![Manytwitch grid layout with four Twitch streams](/img/manytwitch/manyTwitch3.png)

{% highlight html %}
  <code>section</code>
{% endhighlight %}
