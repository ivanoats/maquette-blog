(function() {
  var h = maquette.h;
  var projector = maquette.createProjector();

  var post = {
    title: 'My Awesome Post',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam officiis possimus corrupti voluptatem in ipsam dolor cumque ipsum, sunt numquam praesentium natus incidunt voluptatibus, quisquam facere dignissimos minus odio deserunt.',
    publishedOn: new Date('Nov 15 2015 10:00:00 GMT-0800'),
    author: 'Ivan Storck',
    authorUrl: 'http://ivanstorck.com',
    category: 'boilerplate'
  };

  function articleHeader() {
    return h('header',
      [ h( 'h1', [ post.title ] ),
        byLine()
      ]);
  }

  function authorAddress() {
    return h('address',
      [ h('a',
          { href: post.authorUrl },
          [post.author]
        )
      ])
  }

  function daysAgo(date) {
    return parseInt((new Date() - new Date(date))/60/60/24/1000);
  }

  function byLine() {
    return h('div',
      { classes: { byline: true } },
      [ 'By',
        authorAddress(),
        ' published ' + daysAgo(post.publishedOn) + ' days ago'
      ]
    );
  }

  function article() {
    return h('article',
      {
        classes: {clearfix: true},
        'data-author': post.author,
        'data-category': post.category
      },
      [ articleHeader(),
        h('section', { classes: {'article-body': true} }, [post.body]),
        h('a', { classes: {'read-on': true} }, ['Read on &hellip;'])
      ]
    );
  }

  document.addEventListener('DOMContentLoaded', function () {
    projector.append(document.getElementById('app'), article);
  });
})();
