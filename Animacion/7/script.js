// Enhanced Music Data with Audio URLs
const musicData = {
    albums: [
        {
            id: 1,
            title: 'After Hours',
            artist: 'The Weeknd',
            cover: '"./assets/audio/blinding-lights.mp3"',
            tracks: [
                { 
                    title: 'Blinding Lights', 
                    duration: '3:20',
                    audioUrl: '"C:\Users\HP\Downloads\wwd.mp3juice.blog - The Weeknd - Blinding Lights (Official Audio) (320 KBps).mp3"'
                },
                { 
                    title: 'Save Your Tears', 
                    duration: '3:35',
                    audioUrl: '"C:\Users\HP\OneDrive\Desktop\ani\cancion the wh.mp3"'
                }
            ]
        },
        {
            id: 2,
            title: 'Random Access Memories',
            artist: 'Daft Punk',
            cover: 'https://cdn-images.dzcdn.net/images/cover/311bba0fc112d15f72c8b5a65f0456c1/0x1900-000000-80-0-0.jpg',
            tracks: [
                { 
                    title: 'Get Lucky', 
                    duration: '4:08',
                    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav'
                },
                { 
                    title: 'Instant Crush', 
                    duration: '5:37',
                    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav'
                }
            ]
        },
        {
            id: 3,
            title: 'To Pimp a Butterfly',
            artist: 'Kendrick Lamar',
            cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLt4XiNWdQLPj0NR2T8VltdjsWbk_89q52_R01KG5o-_z3Unx6ym03ncxvSTyb3UvGh68&usqp=CAU',
            tracks: [
                { 
                    title: 'King Kunta', 
                    duration: '3:54',
                    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav'
                },
                { 
                    title: 'Alright', 
                    duration: '3:39',
                    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav'
                }
            ]
        }
    ],
    genres: {
        pop: {
            artists: ['The Weeknd', 'Taylor Swift', 'Ed Sheeran', 'Billie Eilish'],
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO9yYc1wAzVEshfuJYkjOkNoI6seoZOEpzrw&s'
        },
        rock: {
            artists: ['Arctic Monkeys', 'Tame Impala', 'The Strokes', 'Red Hot Chili Peppers'],
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_0TvXGkLRwqJKopCMBkt0kl7tfAWzusxeYQ&s'
        },
        hiphop: {
            artists: ['Kendrick Lamar', 'J. Cole', 'Drake', 'Travis Scott'],
            image: 'https://i.scdn.co/image/ab67616d0000b2738b52c6b9bc4e43d873869699'
        },
        reggaeton: {
            artists: ['Al Malilla', 'Cachirula', 'El Bogueto', 'Yeri MUA', 'Bellakath', 'Uzielito'],
            image: 'https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg'
        }
    }
};

// Audio Player State
const audioPlayer = {
    audio: document.getElementById('audio-player'),
    currentTrack: null,
    currentAlbum: null,
    isPlaying: false,
    currentTime: 0,
    duration: 0,
    volume: 1
};

// State Management
let currentScreen = 'home-screen';

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupNavigation();
    setupAudioPlayer();
    setupAlbumCards();
    setupGenreCards();
    setupLibraryTabs();
    setupPlaybackControls();
    setupProgressBar();
    
    // Initialize library content
    updateLibraryContent('albums');
}

// Navigation System
function setupNavigation() {
    document.querySelectorAll('.nav-button').forEach(button => {
        button.addEventListener('click', () => {
            const screenId = button.dataset.screen;
            switchScreen(screenId);
            
            document.querySelectorAll('.nav-button').forEach(btn => {
                btn.classList.remove('active');
            });
            button.classList.add('active');
        });
    });
}

function switchScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
    currentScreen = screenId;
}

// Audio Player Setup
function setupAudioPlayer() {
    const audio = audioPlayer.audio;
    
    audio.addEventListener('loadedmetadata', () => {
        audioPlayer.duration = audio.duration;
        updateTimeDisplay();
    });
    
    audio.addEventListener('timeupdate', () => {
        audioPlayer.currentTime = audio.currentTime;
        updateProgressBar();
        updateTimeDisplay();
    });
    
    audio.addEventListener('ended', () => {
        audioPlayer.isPlaying = false;
        updatePlayButtons();
        // Auto-play next track could be implemented here
    });
    
    audio.addEventListener('error', (e) => {
        console.error('Audio error:', e);
        showNotification('Error loading audio file');
    });
}

// Album Cards Setup
function setupAlbumCards() {
    document.querySelectorAll('.album-card').forEach(card => {
        card.addEventListener('click', () => {
            const albumId = parseInt(card.dataset.album);
            const album = musicData.albums.find(a => a.id === albumId);
            if (album) {
                playAlbum(album);
            }
        });
    });
}

function playAlbum(album) {
    audioPlayer.currentAlbum = album;
    const firstTrack = album.tracks[0];
    playTrack(firstTrack, album);
    switchScreen('now-playing-screen');
    updateNavigation('now-playing-screen');
}

function playTrack(track, album) {
    audioPlayer.currentTrack = {
        ...track,
        artist: album.artist,
        albumCover: album.cover
    };
    
    const audio = audioPlayer.audio;
    audio.src = track.audioUrl;
    
    audio.load();
    
    // Wait for audio to be ready before playing
    audio.addEventListener('canplaythrough', function playWhenReady() {
        audio.removeEventListener('canplaythrough', playWhenReady);
        audio.play().then(() => {
            audioPlayer.isPlaying = true;
            updatePlayButtons();
            updateNowPlaying();
            updateMiniPlayer();
        }).catch(e => {
            console.error('Playback failed:', e);
            showNotification('Playback failed');
        });
    });
}

// Genre Cards Setup
function setupGenreCards() {
    document.querySelectorAll('.genre-card').forEach(card => {
        card.addEventListener('click', () => {
            const genreId = card.dataset.genre;
            const genre = musicData.genres[genreId];
            if (genre) {
                displayArtists(genre.artists, genreId);
            }
        });
    });
}

function displayArtists(artists, genreId) {
    const container = document.querySelector('.genre-artists');
    container.innerHTML = '';
    
    const title = document.createElement('h3');
    title.textContent = `Artistas de ${genreId.charAt(0).toUpperCase() + genreId.slice(1)}`;
    title.style.marginBottom = '1rem';
    title.style.fontSize = '1.25rem';
    title.style.fontWeight = '700';
    container.appendChild(title);
    
    const artistsList = document.createElement('div');
    artistsList.className = 'artists-grid';
    
    artists.forEach(artist => {
        const artistCard = document.createElement('div');
        artistCard.className = 'artist-card';
        artistCard.innerHTML = `<h3>${artist}</h3>`;
        
        artistCard.addEventListener('click', () => {
            showNotification(`Explorando música de ${artist}`);
        });
        
        artistsList.appendChild(artistCard);
    });
    
    container.appendChild(artistsList);
}

// Playback Controls
function setupPlaybackControls() {
    // Main play button
    const playButton = document.getElementById('play-button');
    playButton.addEventListener('click', togglePlay);
    
    // Mini player play button
    const miniPlayButton = document.getElementById('mini-play-button');
    miniPlayButton.addEventListener('click', togglePlay);
    
    // Previous and next buttons
    document.getElementById('prev-button').addEventListener('click', playPreviousTrack);
    document.getElementById('next-button').addEventListener('click', playNextTrack);
    
    // Mini player click to open now playing
    document.getElementById('mini-player').addEventListener('click', (e) => {
        if (!e.target.closest('.mini-control-btn')) {
            switchScreen('now-playing-screen');
            updateNavigation('now-playing-screen');
        }
    });
}

function togglePlay() {
    const audio = audioPlayer.audio;
    
    if (!audioPlayer.currentTrack) {
        // Play first available track if none is selected
        if (musicData.albums.length > 0) {
            playAlbum(musicData.albums[0]);
        }
        return;
    }
    
    if (audioPlayer.isPlaying) {
        audio.pause();
        audioPlayer.isPlaying = false;
    } else {
        audio.play().then(() => {
            audioPlayer.isPlaying = true;
        }).catch(e => {
            console.error('Playback failed:', e);
            showNotification('Playback failed');
        });
    }
    
    updatePlayButtons();
}

function playPreviousTrack() {
    if (!audioPlayer.currentAlbum) return;
    
    const currentTrackIndex = audioPlayer.currentAlbum.tracks.findIndex(
        track => track.title === audioPlayer.currentTrack.title
    );
    
    if (currentTrackIndex > 0) {
        const previousTrack = audioPlayer.currentAlbum.tracks[currentTrackIndex - 1];
        playTrack(previousTrack, audioPlayer.currentAlbum);
    }
}

function playNextTrack() {
    if (!audioPlayer.currentAlbum) return;
    
    const currentTrackIndex = audioPlayer.currentAlbum.tracks.findIndex(
        track => track.title === audioPlayer.currentTrack.title
    );
    
    if (currentTrackIndex < audioPlayer.currentAlbum.tracks.length - 1) {
        const nextTrack = audioPlayer.currentAlbum.tracks[currentTrackIndex + 1];
        playTrack(nextTrack, audioPlayer.currentAlbum);
    }
}

function updatePlayButtons() {
    const playButtons = document.querySelectorAll('#play-button, #mini-play-button');
    
    playButtons.forEach(button => {
        const playIcon = button.querySelector('.play-icon');
        const pauseIcon = button.querySelector('.pause-icon');
        
        if (audioPlayer.isPlaying) {
            if (playIcon) playIcon.style.display = 'none';
            if (pauseIcon) pauseIcon.style.display = 'block';
        } else {
            if (playIcon) playIcon.style.display = 'block';
            if (pauseIcon) pauseIcon.style.display = 'none';
        }
    });
}

// Progress Bar Setup
function setupProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    
    progressBar.addEventListener('click', (e) => {
        const rect = progressBar.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const width = rect.width;
        const percentage = clickX / width;
        const newTime = percentage * audioPlayer.duration;
        
        audioPlayer.audio.currentTime = newTime;
        audioPlayer.currentTime = newTime;
        updateProgressBar();
    });
}

function updateProgressBar() {
    if (audioPlayer.duration === 0) return;
    
    const percentage = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    const progressElement = document.getElementById('progress');
    
    if (progressElement) {
        progressElement.style.width = `${percentage}%`;
    }
}

function updateTimeDisplay() {
    const currentTimeElement = document.getElementById('current-time');
    const totalTimeElement = document.getElementById('total-time');
    
    if (currentTimeElement) {
        currentTimeElement.textContent = formatTime(audioPlayer.currentTime);
    }
    
    if (totalTimeElement) {
        totalTimeElement.textContent = formatTime(audioPlayer.duration);
    }
}

function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

// UI Updates
function updateNowPlaying() {
    if (!audioPlayer.currentTrack) return;
    
    const albumCover = document.getElementById('current-album-cover');
    const songTitle = document.getElementById('current-song-title');
    const artist = document.getElementById('current-artist');
    
    if (albumCover) albumCover.src = audioPlayer.currentTrack.albumCover;
    if (songTitle) songTitle.textContent = audioPlayer.currentTrack.title;
    if (artist) artist.textContent = audioPlayer.currentTrack.artist;
}

function updateMiniPlayer() {
    const miniPlayer = document.getElementById('mini-player');
    
    if (!audioPlayer.currentTrack) {
        miniPlayer.style.display = 'none';
        return;
    }
    
    const miniAlbumCover = document.getElementById('mini-album-cover');
    const miniSongTitle = document.getElementById('mini-song-title');
    const miniArtist = document.getElementById('mini-artist');
    
    if (miniAlbumCover) miniAlbumCover.src = audioPlayer.currentTrack.albumCover;
    if (miniSongTitle) miniSongTitle.textContent = audioPlayer.currentTrack.title;
    if (miniArtist) miniArtist.textContent = audioPlayer.currentTrack.artist;
    
    miniPlayer.style.display = 'flex';
}

function updateNavigation(screenId) {
    document.querySelectorAll('.nav-button').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const targetButton = document.querySelector(`[data-screen="${screenId}"]`);
    if (targetButton) {
        targetButton.classList.add('active');
    }
}

// Library Management
function setupLibraryTabs() {
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const contentType = tab.dataset.tab;
            updateLibraryContent(contentType);
        });
    });
}

function updateLibraryContent(contentType) {
    const container = document.querySelector('.library-content');
    if (!container) return;
    
    container.innerHTML = '';
    
    if (contentType === 'albums') {
        const albumsGrid = document.createElement('div');
        albumsGrid.className = 'album-grid';
        
        musicData.albums.forEach(album => {
            const albumCard = document.createElement('div');
            albumCard.className = 'album-card';
            albumCard.innerHTML = `
                <div class="album-image-container">
                    <img src="${album.cover}" alt="${album.title}">
                    <div class="play-overlay">
                        <svg class="play-icon" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                    </div>
                </div>
                <h3>${album.title}</h3>
                <p>${album.artist}</p>
            `;
            
            albumCard.addEventListener('click', () => {
                playAlbum(album);
            });
            
            albumsGrid.appendChild(albumCard);
        });
        
        container.appendChild(albumsGrid);
    } else {
        const tracksList = document.createElement('div');
        tracksList.className = 'tracks-list';
        
        musicData.albums.forEach(album => {
            album.tracks.forEach(track => {
                const trackItem = document.createElement('div');
                trackItem.className = 'track-item';
                trackItem.innerHTML = `
                    <h4>${track.title}</h4>
                    <p>${album.artist} • ${track.duration}</p>
                `;
                
                trackItem.addEventListener('click', () => {
                    playTrack(track, album);
                });
                
                tracksList.appendChild(trackItem);
            });
        });
        
        container.appendChild(tracksList);
    }
}

// Utility Functions
function showNotification(message) {
    // Create a simple notification system
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 2rem;
        right: 2rem;
        background: rgba(0, 0, 0, 0.9);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        z-index: 1000;
        font-weight: 500;
        border: 1px solid rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(10px);
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transition = 'opacity 0.3s ease';
        notification.style.opacity = '0';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Search Functionality (basic implementation)
document.querySelector('.search-bar input')?.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    if (searchTerm.length > 2) {
        // Basic search implementation
        showNotification(`Buscando: ${searchTerm}`);
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && !e.target.matches('input')) {
        e.preventDefault();
        togglePlay();
    }
});

// Performance optimization
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        // Handle responsive updates if needed
    }, 250);
});