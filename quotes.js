const localQuotes = [
    {
        text : 'It\'s not a very big step from contentment to complacency.',
        author : 'Simone de Beauvoir',
    },
    {
        text : 'The minute you settle for less than you deserve, you get even less than you settled for.',
        author : 'Maureen Dowd',
    },
    {
        text : 'We must accept finite disappointment, but we must never lose infinite hope.',
        author : 'Martin Luther King, Jr.',
    },
    {
        text : 'Self-complacency is fatal to progress.',
        author : 'Margaret Elizabeth Sangster',
    },
    {
        text : 'You have to take it as it happens, but you should try to make it happen the way you want to take it.',
        author : 'Old German proverb',
    },
    {
        text : 'The best way to remember your wife\'s birthday is to forget it once.',
        author : 'E. Joseph Cossman',
    },
    {
        text : 'When all else is lost, the future still remains.',
        author : 'Christian Nestell Bovee',
    },
    {
        text : 'I never think of the future. It comes soon enough.',
        author : 'Albert Einstein',
    },
    {
        text : 'The moment somebody says to me, "This is very risky," is the moment it becomes attractive to me.',
        author : 'Kate Capshaw',
    },
    {
        text : 'What you are must always displease you, if you would attain to that which you are not',
        author : 'Saint Augustine',
    },
    {
        text : 'If you\'re good to your staff when things are going well, they\'ll rally when times go bad.',
        author : 'Mary Kay Ash',
    },
    {
        text : 'Beware of trying to accomplish anything by force.',
        author : 'Angela Merici',
    },
    {
        text : 'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.',
        author : 'Helen Keller',
    },
    {
        text : 'We must let go of the life we have planned, so as to accept the one that is waiting for us.',
        author : 'Joseph Campbell',
    },
    {
        text : 'It\'s not what you look at that matters, it\'s what you see.',
        author : 'Henry David Thoreau',
    },
    {
        text : 'You can have everything in life you want, if you will just help other people get what they want.',
        author : 'Zig Ziglar',
    },
    {
        text : 'The trust of the innocent is the liar\'s most useful tool.',
        author : 'Stephen King',
    },
    {
        text : 'Each friend represents a world in us, a world not born until they arrive, and it is only by this meeting that a new world is born.',
        author : 'Anais Nin',
    },
    {
        text : 'One cannot think well, love well, sleep well, if one has not dined well.',
        author : 'Virginia Woolf',
    },
    {
        text : 'Love is our true destiny. We do not find the meaning of life by ourselves alone - we find it with another.',
        author : 'Thomas Merton',
    },
    {
        text : 'The size of your success is measured by the strength of your desire; the size of your dream; and how you handle disappointment along the way.',
        author : 'Robert Kiyosaki',
    },
    {
        text : 'The best preparation for tomorrow is doing your best today.',
        author : 'H. Jackson Brown, Jr.',
    },
    {
        text : 'Your talent is God\'s gift to you. What you do with it is your gift back to God.',
        author : 'Leo Buscaglia',
    },
    {
        text : 'A sad soul can kill quicker than a germ.',
        author : 'John Steinbeck',
    },
    {
        text : 'Strength and growth come only through continuous effort and struggle.',
        author : 'Napoleon Hill',
    },
    {
        text : 'If you fell down yesterday, stand up today.',
        author : 'H. G. Wells',
    },
    {
        text : 'The one thing that you have that nobody else has is you. Your voice, your mind, your story, your vision. So write and draw and build and play and dance and live as only you can.',
        author : 'Neil Gaiman',
    },

    {
        text : 'Be not afraid of discomfort. If you can\'t put yourself in a situation where you are uncomfortable, then you will never grow. You will never change. You\'ll never learn.',
        author : 'Jason Reynolds',
    },
    {
        text : 'IIn ancient times cats were worshipped as gods; they have not forgotten this.',
        author : 'Terry Pratchett',
    },
    {
        text : 'If you don\'t know where you are going, any road will get you there.',
        author : 'Lewis Carroll',
    },
    {
        text : 'Let us be grateful to people who make us happy, they are the charming gardeners who make our souls blossom.',
        author : 'Marcel Proust',
    },
    {
        text : 'Failure will never overtake me if my determination to succeed is strong enough.',
        author : 'Og Mandino',
    },
    {
        text : 'One way to get the most out of life is to look upon it as an adventure.',
        author : 'William Feather',
    },
    {
        text : 'Everything we do is for the purpose of altering consciousness. We form friendships so that we can feel certain emotions, like love, and avoid others, like loneliness. We eat specific foods to enjoy their fleeting presence on our tongues. We read for the pleasure of thinking another person\'s thoughts.',
        author : 'Sam Harris',
    },
    {
        text : 'Champions are not the ones who always win races - champions are the ones who get out there and try. And try harder the next time. And even harder the next time. \'Champion\' is a state of mind. They are devoted. They compete to best themselves as much if not more than they compete to best others. Champions are not just athletes.',
        author : 'Simon Sinek',
    },
    {
        text : 'Where words fail, music speaks.',
        author : 'Hans Christian Andersen',
    },
    {
        text : 'Children should learn that reading is pleasure, not just something that teachers make you do in school.',
        author : 'Beverly Cleary',
    },
    {
        text : 'Put two ships in the open sea, without wind or tide, and, at last, they will come together. Throw two planets into space, and they will fall one on the other. Place two enemies in the midst of a crowd, and they will inevitably meet; it is a fatality, a question of time; that is all.',
        author : 'Jules Verne',
    },
    {
        text : 'Success is the sum of small efforts - repeated day in and day out.',
        author : 'Robert Collier',
    },
    {
        text : 'Be Impeccable With Your Word. Speak with integrity. Say only what you mean. Avoid using the word to speak against yourself or to gossip about others. Use the power of your word in the direction of truth and love.',
        author : 'Don Miguel Ruiz',
    },
    {
        text : 'You cannot control what happens to you, but you can control your attitude toward what happens to you, and in that, you will be mastering change rather than allowing it to master you.',
        author : 'Brian Tracy',
    },
    {
        text : 'Circumstances do not make the man, they reveal him.',
        author : 'James Allen',
    },
    {
        text : 'Every day brings new choices.',
        author : 'Martha Beck',
    },
    {
        text : 'Life isn\'t a matter of milestones, but of moments.',
        author : 'Rose Kennedy',
    },
    {
        text : 'What nicer thing can you do for somebody than make them breakfast?',
        author : 'Anthony Bourdain',
    },
    {
        text : 'We live in a fantasy world, a world of illusion. The great task in life is to find reality.',
        author : 'Iris Murdoch',
    },


]