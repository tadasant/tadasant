---
title: "Your variables are going through an identity crisis"
date: "2017-11-19"
description: "Naming is well-known to be one of the hardest things to do well in computer science. What can we do to do better? Why should we care? "
coverphoto: _cover-photo.jpeg
medium: "https://medium.com/@tadasant/your-variables-are-going-through-an-identity-crisis-5d135936febf"
---

* * *

![](https://cdn-images-1.medium.com/max/2000/1*cCdSJ0mOqjQkm-soL5hlIw.jpeg)

# Your variables are going through an identity crisis

How much time do you spend reading code?

Probably more than you think.

When writing the next line of code, you’re reading what you wrote two minutes ago. You’re reading the other file your teammate wrote two weeks ago. You’re diving into understanding a library written two years ago.

**And every single one is a rabbit hole!** You read a few lines, jump around to something written a few lines away, jump to a third place, forget the first bit you were reading, go back to refresh yourself, jump back to the third place… it goes on.

Let’s talk about naming: why taking naming your variables, your methods, your classes — everything — more seriously has the potential to 10x your and your team’s development efficiency.

### There’s a lot to read about good naming practices

And I’m not here to add to that stack of literature. I’m writing to try to convince you that the **consequences** of naming in your code well are worth striving for, providing benefits in ways you may have yet to realize.

That said, some of you might already be convinced of that, and would find this toolbox of naming theories and tactics more practically useful than the rest of this post:

*   [Clean Code by Robert C. Martin](https://smile.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882) — In Chapter 2, Martin gives a compelling set of tactics for how to treat naming your code as delicately as naming your first-born child.
*   [Code Complete by Steve McConnell](https://smile.amazon.com/Code-Complete-Practical-Handbook-Construction/dp/0735619670) — Chapter 11 is just as thorough if you really want to hammer it in.
*   [Ten Commandments for Naming Your Code](https://www.exceptionnotfound.net/ten-commandments-for-naming-your-code/), complete with entertaining examples.
*   All about the perils of [SomethingManagers](https://blog.codinghorror.com/i-shall-call-it-somethingmanager/).
*   …and much more, but the above would cover your bases and give you a feel for the topic.

And here in-line my personal, abbreviated cheatsheet of naming code smells that I come across most often:

*   **Don’t use abbreviations.** Does “exp” mean “exponent,” “expected,” “experience”?
*   **Order your nouns and adjectives consistently.** “redColor” and “colorBlue” don’t belong in the same codebase.
*   **Use self-documenting names instead of adding comments.** When I use shift + F6 to rename all instances of your “x” variable, my IDE isn’t going to catch your “// x is the principal value” comment at the top of the class.
*   **Be explicit about unintuitive side-effects.** Your “pullAllGradesForStudent” method shouldn’t also PUT them to an external API.
*   **Avoid using generic words.** “data”, “code”, “get”, “info”, “detail” are overused cop-outs for truly understanding what you intend to say.
*   **Split complicated one-liners into clear, easy-to-understand steps.** Even if it costs some (minor) efficiency losses.
*   **Keep differences between languages and their respective community’s cultures in mind.** Much of your carefully crafted Java code style is going to look weird (and plain bad) when you try to bring it into the world of Python.

With that out of the way, **why should we care?**

### Naming breaks your code into bite-size pieces, preserving your brain’s RAM

In the timeless [Getting Things Done](https://smile.amazon.com/Getting-Things-Done-Stress-Free-Productivity/dp/0143126563/) book on productivity, David Allen describes your human brain to be the equivalent of RAM. He emphasizes that the more you try to store there at a given time, the more likely you are to overload your brain’s RAM, resulting in forgotten details, lost focus, and overall increased stress.

While the RAM — human memory analogy may not be perfect, the point is well taken. Allen’s solution to this limitation is to _write everything down_. Whenever you hear a good idea, whenever you momentarily remember you need to complete a task — when you’re not actively processing some piece of information: **write it down**.

And most importantly, make sure you’re writing it down in a system that you’ve conditioned yourself to **trust**.

If you don’t have a system you can trust, you’re back to square one: there’s no point in freeing up your RAM if you don’t trust your HDD to serve you the information when you need it later.

We can apply this same tactic to the art of coding. When you’ve decided what the next line in your code needs to do, _write it down_. To do that, you’re first going to need to come up with a good name using all those tactics in the last section. Whether it’s a variable or helper function you’re going to bring out, having the diligence to craft a good name for it is the equivalent of building a productivity system you can trust.

When you (or your teammate) looks at that name later, immediately they’ll comprehend what its purpose is. They won’t have to context-switch and dig into the function’s implementation or hop around to usages of the variable to read your one line of code.

Now when you’re reading through your beautifully modular 10 line _main()_ function to add the latest feature, you can immediately understand that it fits best in between line 8 and 9 with a tweak to the value and name of the argument pass into line 9.

### You and your code reviewers will find bugs

Everyone writes bugs in their code. Some write more than others, but ultimately there’s no avoiding the occasional edge case.

When you name well, it becomes possible to mentally unit-test your code. As a reviewer, I’m no longer inundated with a 1,000 line mess that I have to understand end-to-end to give you any kind of useful feedback.

Observe poorly named code:

<iframe width="700" height="250" src="/media/66931e8847d7944aaa7ef24e7767ff7b?postId=5d135936febf" data-media-id="66931e8847d7944aaa7ef24e7767ff7b" allowfullscreen="" frameborder="0"></iframe>

And better named code:

<iframe width="700" height="250" src="/media/203acadf4d3ce56f441c1c5e4ca4b4c9?postId=5d135936febf" data-media-id="203acadf4d3ce56f441c1c5e4ca4b4c9" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F3900899%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>

In which one was it easier to find the bug?

You probably found it pretty quickly in both, but when the situation is non-trivial, it’s easy to imagine a reviewer or developer thinking “Ok, that base is definitely correct. Ok, that exponent is definitely correct. Hmm, weren’t we supposed to combine three elements in step 3?” as opposed to “Does this one liner take all the different components of the problem into consideration?”

### Your teammates will find your code to be reusable

When you’re working on a large codebase with a large team, maybe with a team that no longer has all of its original members, you’re often faced with the thought, “I’m sure someone has previously solved this sub-problem that’s staring me in the face right now…”

And then you’ll go hunting down the teammate who might have heard of such code, who will tell you to look in X module for Y class in hopes of coming up with Z method. You’ll dive into the codebase, digging through the rabbit holes, only to find some obscurely-named method that *looks* right, but you’re not sure. You’ll spend another 30 minutes going through line-by-line before determining that this bit makes some incompatible assumptions with what you need.

In an alternative reality, you have an idea of what you want, you search across the codebase for some obvious keywords, see 5 candidate methods immediately, and find out the 4th one is exactly what you need. Maybe you’ll still spot-check the implementation, but at this point you’re only 30 seconds into your search so that’s a small sacrifice to make for the added assurance. You leverage it and move on with your life.

### Do you *really* understand what you’re writing?

Oftentimes we’re averse to slowing down and taking the time to construct a good name for our next variable because it’ll put a hurdle in our flow — we just want to keep on moving and cranking out those lines of code.

But if you’re incapable of putting a label on the concept you’re about to leverage or implement, is that a flow path you really want to be on? What if you spend the next hour plowing through the implementation, only to realize that 90% of it was all a waste because you forgot to account for a quirk in the application’s domain model?

Maybe you wrote this:

<iframe width="700" height="250" src="/media/7569beaaaa4d534ea9de6f3a625299eb?postId=5d135936febf" data-media-id="7569beaaaa4d534ea9de6f3a625299eb" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F3900899%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>

When you ultimately realize you need something more like this:

<iframe width="700" height="250" src="/media/e0f0f8170a88d15009f38ae71fc0fbe6?postId=5d135936febf" data-media-id="e0f0f8170a88d15009f38ae71fc0fbe6" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F3900899%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>

You can see how this problem could balloon in more complicated situations.

Taking the time to name well up-front will save you significant development, review, and maintenance time down the road. Thinking through use cases, understanding if you need extra data from elsewhere, identifying bad assumptions — all of these issues can be exposed if you take a moment to unearth a good name.

It might not be as fun to delay writing the next line of code to put you one step closer to the happy-path solution. It might be more intellectually stimulating to design a solution (implementation) rather than design a problem statement or label (name) for what you’re tasked to do. And you’ll end up better off if you figure out a way to resist that temptation.

* * *

Naming is not an easy problem. Code reviewees might kick and scream as you keep refusing to merge their pull request until they have that function named just right. You’re going to get stuck on a variable name, call it “data” in anticipation of getting to the interesting algorithmic challenge to follow — and you’ll forget what you were looking for just as you’re getting in really deep.

Through it all: remember why it matters. Treat the time and potential mental drainage of your future self and that of your teammates with respect. When you and others read your old code, you don’t want them to feel as if they’re re-writing and re-understanding it with your past self, over and over again.

Lean in to the discomfort now, and build a codebase for a better tomorrow.

* * *

_Thanks for reading! If topics like this interest you, I’d love to chat. Shoot me a tweet @real_tadas._

_As always, claps are much appreciated!_
