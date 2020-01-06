const path = require("path");

module.exports = ({config}) => {
    // allow SCSS
    config.module.rules.push({
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "../")
    });
    const svgRule = config.module.rules.find(rule => rule.test.test('.svg'));
    svgRule.test = /\.(png|jpe?g|gif|webp)$/;
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        'babel-loader',
        'vue-svg-loader',
      ],
    });    
    config.module.rules.push({
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'file-loader',
    });    
    return config;
};

