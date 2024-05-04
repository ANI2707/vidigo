# Debouncing :
- When I was typing slow then the difference between my keystroke will 200ms
- When I was typing fast then the difference between my keystroke will 300ms

# Performance
- iphone pro max = 14 letter * 1000users=14000 API Calls
- With Debouncing = 3API Calls * 1000users=3000 API Calls

# Debouncing with 200ms
- If difference between 2 key strokes is < 200ms THEN decline api call

- If difference between 2 key strokes is > 200ms THEN make an api call