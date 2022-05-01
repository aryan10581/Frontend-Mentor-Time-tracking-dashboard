let data = [{
        "title": "Work",
        "timeframes": {
            "daily": {
                "current": 5,
                "previous": 7
            },
            "weekly": {
                "current": 32,
                "previous": 36
            },
            "monthly": {
                "current": 103,
                "previous": 128
            }
        }
    },
    {
        "title": "Play",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 2
            },
            "weekly": {
                "current": 10,
                "previous": 8
            },
            "monthly": {
                "current": 23,
                "previous": 29
            }
        }
    },
    {
        "title": "Study",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 7
            },
            "monthly": {
                "current": 13,
                "previous": 19
            }
        }
    },
    {
        "title": "Exercise",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 5
            },
            "monthly": {
                "current": 11,
                "previous": 18
            }
        }
    },
    {
        "title": "Social",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 3
            },
            "weekly": {
                "current": 5,
                "previous": 10
            },
            "monthly": {
                "current": 21,
                "previous": 23
            }
        }
    },
    {
        "title": "Self Care",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 2,
                "previous": 2
            },
            "monthly": {
                "current": 7,
                "previous": 11
            }
        }
    }
]
console.log('Fine')
    // Work
document.getElementById('work_time').innerHTML = data[0].timeframes.daily.current + 'hrs';

document.getElementById('work_week').innerHTML = 'Yesterday- ' + data[0].timeframes.daily.previous + 'hrs';

// Play
document.getElementById('play_time').innerHTML = data[1].timeframes.daily.current + 'hrs'
document.getElementById('play_week').innerHTML = 'Yesterday- ' + data[1].timeframes.daily.previous + 'hrs'
    // Study
document.getElementById('study_time').innerHTML = data[2].timeframes.daily.current + 'hrs'
document.getElementById('study_week').innerHTML = 'Yesterday- ' + data[2].timeframes.daily.previous + 'hrs'
    // Exercise
document.getElementById('ex_time').innerHTML = data[3].timeframes.daily.current + 'hrs'
document.getElementById('ex_week').innerHTML = 'Yesterday- ' + data[3].timeframes.daily.previous + 'hrs'
    // Social
document.getElementById('Social_time').innerHTML = data[4].timeframes.daily.current + 'hrs'
document.getElementById('Social_week').innerHTML = 'Yesterday- ' + data[4].timeframes.daily.previous + 'hrs'
    // Self Care
document.getElementById('self_time').innerHTML = data[5].timeframes.daily.current + 'hrs'
document.getElementById('self_week').innerHTML = 'Yesterday- ' + data[5].timeframes.daily.previous + 'hrs'