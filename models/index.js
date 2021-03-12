// eslint-disable-next-line no-undef
mongoose.connect(
    // eslint-disable-next-line no-undef
    process.env.mongodb_URI || 'mongodb://localhost/banksy',

    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );
  