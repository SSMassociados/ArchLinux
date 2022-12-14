var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "47"
                        }
                    },
                    "geometry.height": 15,
                    "geometry.width": 15,
                    "geometry.x": 57,
                    "geometry.y": 0,
                    "plugin": "org.kde.plasma.analogclock",
                    "title": "Reloj analógico"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "707",
                    "DialogWidth": "1366"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                },
                "/General": {
                    "ToolBoxButtonState": "topright",
                    "ToolBoxButtonX": "1336"
                },
                "/Wallpaper/org.kde.color/General": {
                    "Color": "74,117,185"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Color": "invalid",
                    "FillMode": "",
                    "Image": "file:///home/usuario/.local/share/wallpapers/Fantasma.png"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "center",
            "applets": [
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "100"
                        },
                        "/Configuration/General": {
                            "favoritesPortedToKAstats": "true"
                        }
                    },
                    "plugin": "org.kde.plasma.kickoff"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "42",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "0"
                        }
                    },
                    "plugin": "org.kde.plasma.pager"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "42",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "0"
                        }
                    },
                    "plugin": "org.kde.plasma.taskmanager"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "82",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "5"
                        }
                    },
                    "plugin": "org.kde.plasma.systemtray"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "42",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Configuration/Configuration/Configuration/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        }
                    },
                    "plugin": "org.kde.plasma.digitalclock"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "42",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Configuration/Configuration/Configuration/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        }
                    },
                    "plugin": "org.kde.plasma.showdesktop"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "82",
                    "DialogWidth": "1366"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                }
            },
            "height": 2,
            "hiding": "normal",
            "location": "bottom",
            "maximumLength": 75.88888888888889,
            "minimumLength": 75.88888888888889,
            "offset": 0
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
