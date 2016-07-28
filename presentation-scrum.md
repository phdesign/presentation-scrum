# We don't do Scrum


## Script outline

Agile is done well at PageUp, but we don't do Scrum

Agile manifesto

Scrum vs. Kanban vs. XP vs. Lean

Origins of Scrum

Shu-Ha-Ri

Scrum is like chess

Redfin have been working hard to have completed sprints

Sprint goals

Scrum things I'd like to see us do more of at PageUP

* Sprint review - trust, get attendees involved in demo, its about feedback not presentation
* Product backlog grooming

We don't do Scrum, but do we need to? 

Pigs vs. Chickens

Definition of Done

What is PageUp agile?

## Script

Here at PageUp, we have mature, effective agile practices. We value the the principles of agile, of being adaptable and flexible to change, of turning up the good stuff and trimming away the excess. But we don't do Scrum. In this talk I want to explore what Scrum is, how it differs from what we do at PageUp and maybe give you some techniques you can take from Scrum to improve our processes.

Let's start by going back to those key principles of agile that should be etched into everyone's brain. Here's the agile manifesto.

...

Agile is way of working that encourages building the right thing at the right time for the right people, anything else we do needs to be balanced against whether its value is worth the effort. Like documentation, many developers rejoice at this line "Working software over documentation" and take it as an excuse not to write any documentation, but that's not what it says, it says we prefer working software over documentation, documentation has it's place, but it doesn't have to be a bible sized user manual like we used to see (dot matrix user manual slide). So we write just in time documentation on the knowledge portal, and rather than documenting workarounds and known issues we just go fix them.

Early adopters of agile quickly realised that agile isn't something you can bottle up and spray on developers to make them perform better, it requires a culture change across the whole business. Agile frameworks emerged to give developers tried and tested rules, that when applied to their teams can help achieve an enlightened state of software development. These frameworks included Scrum, Kanban, XP...

Scrum came from...

An important concept in Scrum is that it's a prescriptive framework. Like chess, if you don't play by the rules of Scrum then you're not doing Scrum. That isn't to say it's the only way to do effective agile, it's just that either you're doing Scrum, or you're not. Many organisations who attempt Scrum fail because they try to fit it into their current processes and while they go through some of the motions, they don't reap the benefits. We explain how to overcome this problem using Shu-Ha-Ri. 

Shu-Ha-Ri is three phases of learning. Shu means to master the art, to learn the rules and apply them exactly. In this way, organisations trying to evolve from traditional waterfall are encouraged to follow the Scrum rules exactly till they start to see the benefits and the culture change apply.

Ha means to refine those practices.

Ri means that now as a master you understand why the rules are there and you can adopt them and change to improve how they work in your business.

So what are the rules of Scrum? it's hard to talk about the rules without also discussing some of the additional best practices that have emerged around them, to differentiate I'm going to mark a rule with a chess piece. If it doesn't have a chess piece, then it's best practice.

A Scrum team includes 5 - 12 team members, a ScrumMaster and a Product Owner. 

The team members need to be cross skilled, self motivated and self organising. Scrum teams can be made up of professionals from all disciples including developers, testers and business analysts, but each one needs to be prepared to contribute to any activity that's required by the team, be it requirements gathering, system design, development or testing. It's not ok to have the team blocked waiting for a tester to become available to test their code.

The Product Owner is the business representative within the team, it's their responsibly to own and prioritise the Product Backlog, and to set the vision for what the team is trying to achieve. Often the Product Owner role is filled by a manager or sponsor within the business who may only be part time working with the Scrum team. The Product Owner cannot be a member of the team and they cannot also hold the ScrumMaster role.

The ScrumMaster is responsible for coordinating the teams activities. They ensure everyone is adhering to the rules of Scrum and they organise and facilitate the ceremonies. They're responsible for helping unblock any external dependencies, such as getting time with clients or business members, or making sure the product owner is available to answer questions from the team.  The ScrumMaster may also be a member of the team like a developer, but it's discouraged. 

There are some typical artefacts that can be found in most agile teams. The names of them usually vary but Scrum gives them explicit terms to remove any ambiguity. 

The first artefact is the Product Backlog Item. At PageUp this is typically called a Story, it's a specific scenario that we want to cater for in our software. Scrum doesn't mandate how they are written, but usually it is in the form of a user story, "As a … I want … so that …".

The list of all the Product Backlog Items is called the Product Backlog. The Product Backlog is owned by the Product Owner who is the sole person allowed to order and prioritise the Product Backlog Items according to business need or value. Ideally every item on the Product Backlog has a size estimate on it. Again, Scrum doesn't mandate how to do sizing of the items, that's left up to the team, the important thing is that every size on every item is relative to other items. At PageUp, we use story point sizing, t-shirt sizing like small, medium or large, and perfect developer days. By sizing every item it enables us to predict when a Product Backlog Item will be delivered. This is one of the keys to Scrum, developers don't estimate when something will be done, it's predicted from past performance. 

A Release Burndown chart helps us do this prediction. By graphing the number of points still sitting above an item on the ordered Product Backlog, over a few sprints we can get a sprint velocity line that will estimate when the team will complete this item. As we encourage change in the Product Backlog this date can vary continuously by changing the order of the item or adding new items above it, but it helps give the Product Owner a visualisation of the impact of reordering the Product Backlog.

The Sprint is a core concept in Scrum, one I think most of us are familiar with here. A sprint is period of time that the team work on a fixed set of Product Backlog Items. While constant change to the upcoming work for the team is acceptable and encouraged, change within the sprint is not. The sprint gives the development team certainty about what they're working to so they can plan. Once started, a Product Owner is not allowed to change scope within the sprint without the agreement of the entire team, and it's the ScrumMaster's responsibility to enforce this. 

At the start of a Sprint, the team create a Sprint Backlog. This is done by the Product Owner presenting a list of the next Product Backlog Items they want delivered, and the team breaking these down into more discrete tasks and estimating them. But wait! We already estimated the Product Backlog Items right? We did, but those estimates were relative sizing to other items, the Sprint tasks are usually estimated in actual hours or days so that we can predict how much work will get done in this sprint. By giving all the Sprint tasks an estimate, and then estimating our capacity (or number of actual development hours the team will do) for the Sprint, the team determines how many Product Backlog Items they'll get through. Here's another key point, the team decide on how much they can do in the Sprint, not the Product Owner. The Product Owner only gets to decide the order of those items.

At the end of the sprint the team should produce a potentially shippable product increment. It's potentially shippable because while it might be functional, it may not make a coherent user experience without other Product Backlog Items being done, but the key is that the items completed in this sprint are completely done, ready to be delivered. The team needs to agree on what done means, this is called the Definition of Done. For each Scrum team this definition can vary so it's left to the team to create their own definition. It should be as done as is possible, including code review, testing and merging branches. For some teams it might also include deployment to live. Some Scrum teams will have a Definition of Done for a task, for a Product Backlog Item and for the sprint as a whole.

Each day during the sprint the team will typically burn down their sprint tasks, which means they'll estimate how many hours or days are left on the tasks given what they know now. There's a subtle difference to estimating what's left compared to what's been completed, if we do the latter then it's a measure of the developers performance yesterday, which can can be prone to exaggeration, whereas the former, estimating what's left, can accommodate for new understanding. The sprint burndown is usually captured in the Sprint Burndown Chart, which gives an indication of whether the team will complete the sprint or not. It's normal for the burndown line to plateau or even go up at the start of the sprint as everyone picks up new tasks to work on and then towards the end of the sprint it may sharply decline. The team usually gets familiar with the look of their Sprint Burndown Charts and know what's normal and what indicates they're not going to complete all the work.

We've discussed the roles in Scrum of Product Owner, ScrumMaster and team members, we've also looked at some of the artefacts like Product Backlog Items, Product Backlog, Sprint Backlog, Release Burndowns and Sprint Burndown Charts. Now let's look at the ceremonies in Scrum, the meetings that help keep communication going. Because one of the Agile Manifesto principles was ….

We've discussed that the Sprint Backlog gets created at the start of a Sprint, this is done in a Sprint Planning meeting. Only the Product Owner, ScrumMaster and team members are invited to the Sprint Planning meeting to allow for free conversation and realistic estimates. Sprint Planning is usually time boxed to 30min for every week in the sprint. So if you run 2 week sprints then planning shouldn't take longer than an hour. The first half of sprint planning is dedicated to the Product Owner to present the items they want to be worked on and elaborate on them as much as possible, the team is encouraged to ask as many questions as they need to get a clear understanding of the work involved. The second half of the meeting is then given over to the developers to discuss solutions to the Product Backlog Items and to break them into discrete tasks before estimating them. By working out capacity (average number of development hours available per sprint * number of developers - any leave or events) the ScrumMaster can work with the team to determine how many of The Product Backlog Items they'll be able to achieve this sprint. The Product Owner is welcome to stay for this discussion or leave.

Once the Sprint Backlog has been created developers then take tasks off the backlog as they become available. Each morning the team will have a Daily Scrum meeting where everyone presents what they worked on yesterday, what they will work on today and any blockers they have. It's important that the Daily Scrum doesn't turn into a discussion and it's the ScrumMasters responsibility to keep everyone on track and get through it as quickly as possible, parking any topics for further discussion after the meeting. The Daily Scrum shouldn't last for more than 15 minutes. The Sprint Backlog should be updated during the Daily Scrum with the estimates of what time is left for each task.

Sometime during the Sprint, the Product Owner and one or more team members will hold a Backlog Grooming session. During this meeting any new Product Backlog Items need to be sized and the Product Backlog should be re-prioritised as needed. Usually a Product Owner will use both business value and development effort to determine the best order for return on investment. (Maybe show slide about which ones to tackle - high value, low effort, low value, high effort). It's worth noting that the Product Owner (and in fact anyone) can add new Product Backlog Items to the Product Backlog at any time, but as I've said only the Product Owner can order them. The Backlog Grooming session is time boxed to X hours per week of sprint.

Finally, at the end of the sprint the team will hold a Sprint Retrospective and a Sprint Review. The retro is an opportunity for the team to discuss the process and any changes they think would help. In a similar way to how Scrum aims to incrementally build product allowing for change, Scrum also encourages incremental change to the team processes to keep refining and improving them. The way the retro is run is up to the team but typically it includes everyone talking about what worked, what didn't work and what they can do differently. Only the ScrumMaster and team are allowed to attend the retro. 

Either before or after the retro the team will also hold a Sprint Review, the review is intended to showcase the work the team has done during the sprint. Everyone is invited to the Sprint Review, including clients both in the business and externally. The Sprint Review is not intended to be a presentation but a time for every to reflect on the product in a judgement free environment. Everyone is encourages to share their thoughts and usually the feedback from the Sprint Review is added to the Product Backlog for prioritisation.