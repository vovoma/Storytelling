export const environment = {
    production: true,
    backend: {
        protocol: 'http',
        host: 'localhost',
        port: '3011',
        endpoints: {
          signup: '/api/auth/signup',
          signin: '/api/auth/signin',
          articles: '/api/articles',
          users : '/api/users',
          slides: '/api/slides',
          images: '/api/images',
          imagesServer : '/api/imagesServer',
          search : '/api/slides/search'
        }
    }
};