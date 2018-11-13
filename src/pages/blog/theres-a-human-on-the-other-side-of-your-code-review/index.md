---
title: "There’s a human on the other side of your code review"
date: "2017-10-28"
subtitle: "\"Don’t take review comments personally, it’s just a busy engineer’s way of communicating.\""
description: "I remember reading that line littered amongst some advice for junior developers. I didn’t think much of it at the time — makes sense, I thought. As I went about code reviewing and being code reviewed..."
coverphoto: _cover-photo.jpeg
medium: "https://medium.com/@tadasant/theres-a-human-on-the-other-side-of-your-code-review-9732cc15bfee"
---

_Originally published on [Medium](https://medium.com/@tadasant/theres-a-human-on-the-other-side-of-your-code-review-9732cc15bfee)_

# There’s a human on the other side of your code review

![](https://cdn-images-1.medium.com/max/2000/1*H-7ysKLqFtZ5hJSbeCt9AQ.jpeg)Code reviews are a fact of life for most software developers; are we doing enough to look beyond the code within them?

> _“Don’t take review comments personally, it’s just a busy engineer’s way of communicating.”_

I remember reading that line littered amongst some advice for junior developers. I didn’t think much of it at the time — makes sense, I thought.

As I went about code reviewing and being code reviewed at my day job, that line kept coming back to me. Easy enough advice to follow. But, I started thinking, why is that the status quo?

There’s a lot out there that’s already been said and written about code reviews. “It’s not just about bugs, but about more than one person understanding the code,” “here’s how to minimize time spent on reviews,” “young developers learn faster when asked to do reviews,” and much more. I want to explore another aspect of code reviews, the often ignored one: what are we doing (or failing to do) in code reviews that is facilitating camaraderie, trust, learning, and innovation?

With that, here’s a handful of ideas that we could be doing more to apply or emphasize in order to build stronger teams and better results.

### Before the review, *talk*

Every now and then I see code reviews kicking off without the dev and reviewer ever having had a conversation on the topic. Or even if they’ve had a high level architecture discussion, the reviewer has no idea how the dev went about implementing it until he or she has sifted through a few files.

Chatting for five minutes — in person, on a call, or a quick IM exchange — has many obvious productivity and quality benefits. As the reviewer, you can find out the best way to traverse the file structure, the major considerations the dev was trying to address, any quirks or assumptions he or she included, and any particular problem areas to which you should pay close attention.

Beyond that: you give the dev an opportunity to teach you, the reviewer, something you didn’t already know. The dev is the one who’s spent hours with the code, exploring the nooks and crannies of the problem space. Before walking through the dev’s meticulously designed kingdom to point out the weed here and there, give them an opportunity to tour you through their accomplishment with pride.

### Don’t use relationship capital when an automated tool could take the fall for you

Automation is a go-to solution for optimizing code reviews. Linters, continuous integration, automated tests, code coverage metrics — all of that undoubtedly leads to higher quality code, fewer feedback cycles, and less human time wasted.

An undervalued benefit that automation brings to the table is the outsourcing of criticism.

Nobody likes to be criticized, and that is especially true for more the subjective topics that many code reviews comments can touch. Reminding your coworker to use tabs instead of spaces, camel case instead of snake case, or rearrange that file’s imports isn’t going to win you any brownie points at the office, even if it does improve your codebase’s maintainability.

When a tool tells them for you, you lose nothing and still maintain that code integrity. So dig into that backlog of automation tasks you have saved up and stop personally antagonizing your teammates before it’s too late.

### Phrase your review comments humbly and encouragingly

There’s nothing more demoralizing for a dev than to see a dry, matter-of-fact, “This algorithm runs O(n²)” type comment.

Code review comments that simply state, “Do X” or “X is wrong” seem to end up as wrong themselves more often than you might expect. If not wrong, then at least there’s a good chance the dev made a conscious decision to do it for reasons that might not be top of mind for you in the moment. At the end of the day the dev, even if accustomed to your style, will be annoyed that you didn’t recognize their effort, didn’t necessarily offer a solution, and arrogantly asserted your dominance.

At the very least, prepend your comments with a “please.” Consider framing your comments as a question, “Have you considered doing X in Y way?” And if you have a hunch it might be truly subjective, take a moment to ask “Could you explain this part to me?” and maybe you’ll learn something yourself, or at least give the dev an opportunity to think through it and come to a better solution themselves.

Most importantly: you won’t instill a culture of fear in your reviewees. They won’t be afraid to try innovative approaches to problems because they’ll be excited to discuss the ins and outs of a novel approach with you. They’ll keep thinking about “what’s best” rather than “what’s my reviewer going to say.”

I get that we as engineers are inclined to be curt and to the point. But it’s not worth grabbing a couple seconds of “optimized” time in exchange for a constant, subtle drain on your relationship with your reviewees.

### Take the time to teach, not just tell

Sometimes being humble and encouraging is good, but let’s take it a step further.

On the other side of your review is a student. Mostly just hoping for the A+ grade and code review approval, but if you’re going to reject it, make it well worth his or her time. Explain your reasoning. Link to the documentation where you learned a nifty trick or the blog post where you first adopted a best practice.

Not only will this better entrench some knowledge in your reviewee so that you won’t have to catch the same mistakes next time, but the reviewee will begin to respect you more as he or she realizes that they get something out of every code review you do.

Instead of being the human safety net for a code push, you take on a mentor role. And that’s a more rewarding relationship for all involved.

### When something breaks anyway, it’s *your* fault

It’s going to happen. You’ll approve a review, the code will make its way to production, and…it broke. The dev frantically works to fix it and minimize the user impact, but the damage is done. The dev messed up, everyone on your team knows he or she did, and it’s something that will be implicitly if not explicitly etched into the minds of all your teammates for some time to come.

Unless, that is, you step in and insist on taking the blame.

Resist the temptation to fly under the radar. The dev already has enough on his or her plate: fixing the bug under pressure, living with their name being on etched onto the breaking commit in version control history, knowing that despite spending hours writing the code, the bug never crossed their mind.

And you have very little to lose. Announce that it’s your fault, you forgot to consider the edge case, and it won’t happen again. Sit with the dev to fix the problem. At worst, your team will conclude that it was both of your faults and move on. But regardless of that conclusion, you’ll have built some long-lasting rapport with the dev you stood up for and the respect of your boss who was watching with keen interest at how the situation unfolded.

A code review doesn’t have to be just a process, a task to be checked off. When human nature is involved, **how** you go about achieving results can matter just as much, if not more than, the results themselves.
