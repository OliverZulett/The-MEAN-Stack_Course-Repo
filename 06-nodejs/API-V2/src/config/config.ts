export default {
    DB: {
        URI: process.env.MONGODB_URI || 'mongodb://josh:josh@localhost:27018/culturaCupcake',
        ATLAS_URI: 'mongodb+srv://josh:josh@tmsc-cluster-phugw.gcp.mongodb.net/culturaCupcake?retryWrites=true&w=majority'
    }
}

