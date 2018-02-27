module.exports = {
    "extends": "airbnb",
    "env": {
        "browser": true,
        "node": true
    },
    "rules": {
        "import/extensions": ["off", "never"]
    },
    "settings": {
        "import/resolver": {
            "node": {
                "paths": ["src"]
            }
        }
    }
};

