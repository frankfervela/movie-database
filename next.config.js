module.exports = {
  reactStrictMode: true,
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    };
  },
  images: {
    domains: ["hulu-matchmaker.s3.us-west-2.amazonaws.com", "image.tmdb.org"]
  }
}

