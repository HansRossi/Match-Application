import { useState } from 'react'
import './App.css'

// Типы данных
interface User {
  id: string
  name: string
  age: number
  skills: string[]
  interests: string[]
  bio: string
  photo: string
  lookingFor: string[]
  experience: string
  location: string
  github?: string
  portfolio?: string
}

interface Match {
  id: string
  user: User
  timestamp: Date
  lastMessage?: string
}

// Реалистичные данные пользователей
const mockUsers: User[] = [
  {
    id: '1',
    name: 'Алексей Петров',
    age: 24,
    skills: ['Python', 'Django', 'PostgreSQL', 'Docker', 'AWS'],
    interests: ['Machine Learning', 'Data Science', 'Стартапы', 'Финтех'],
    bio: 'Senior Python Developer в Яндексе. Создаю ML-модели для рекомендательных систем. Ищу команду для B2B SaaS проекта в области аналитики.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    lookingFor: ['Python', 'ML', 'Data Science', 'Backend'],
    experience: '3+ года',
    location: 'Москва, Россия',
    github: 'github.com/alex-petrov',
    portfolio: 'alex-petrov.dev'
  },
  {
    id: '2',
    name: 'Мария Воронова',
    age: 22,
    skills: ['UI/UX Design', 'Figma', 'Principle', 'After Effects', 'Research'],
    interests: ['Product Design', 'Behavioral Psychology', 'Accessibility', 'Design Systems'],
    bio: 'Product Designer в Тинькофф. Специализируюсь на финансовых продуктах и создании инклюзивных интерфейсов. Хочу запустить EdTech платформу.',
    photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b190?w=400&h=400&fit=crop&crop=face',
    lookingFor: ['UI/UX', 'Product Design', 'Frontend', 'EdTech'],
    experience: '2+ года',
    location: 'Санкт-Петербург, Россия',
    portfolio: 'maria-design.com'
  },
  {
    id: '3',
    name: 'Дмитрий Козлов',
    age: 28,
    skills: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'Kubernetes'],
    interests: ['Web3', 'Blockchain', 'DeFi', 'Open Source'],
    bio: 'Tech Lead в Авито. 6+ лет разработки высоконагруженных систем. Контрибьютор в React. Интересуют проекты на пересечении Web3 и соцсетей.',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    lookingFor: ['React', 'TypeScript', 'Web3', 'Blockchain'],
    experience: '6+ лет',
    location: 'Москва, Россия',
    github: 'github.com/dmitry-kozlov'
  },
  {
    id: '4',
    name: 'София Лебедева',
    age: 20,
    skills: ['Flutter', 'Dart', 'Firebase', 'Swift', 'Kotlin'],
    interests: ['Mobile Development', 'AR/VR', 'HealthTech', 'Indie Games'],
    bio: 'Mobile Developer в VK. Разрабатываю cross-platform приложения. Мечтаю создать AR-приложение для образования и здоровья.',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    lookingFor: ['Flutter', 'Mobile', 'AR/VR', 'HealthTech'],
    experience: '1.5+ года',
    location: 'Новосибирск, Россия',
    github: 'github.com/sofia-dev'
  },
  {
    id: '5',
    name: 'Артем Никитин',
    age: 26,
    skills: ['Go', 'Microservices', 'Kafka', 'Redis', 'Prometheus'],
    interests: ['DevOps', 'Cloud Architecture', 'Performance', 'Monitoring'],
    bio: 'Senior Backend Engineer в Ozon. Архитектор микросервисной платформы на Go. Оптимизирую производительность высоконагруженных систем.',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    lookingFor: ['Go', 'Backend', 'DevOps', 'Architecture'],
    experience: '4+ года',
    location: 'Екатеринбург, Россия',
    github: 'github.com/artem-go'
  },
  {
    id: '6',
    name: 'Анна Морозова',
    age: 23,
    skills: ['Data Science', 'Python', 'TensorFlow', 'SQL', 'Tableau'],
    interests: ['Computer Vision', 'NLP', 'Healthcare AI', 'Ethics in AI'],
    bio: 'Data Scientist в Сбере. Разрабатываю ML-модели для кредитного скоринга. Исследую применение ИИ в медицине и этические аспекты алгоритмов.',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face',
    lookingFor: ['Data Science', 'ML', 'AI', 'Healthcare'],
    experience: '2+ года',
    location: 'Москва, Россия',
    github: 'github.com/anna-ml'
  },
  {
    id: '7',
    name: 'Максим Орлов',
    age: 25,
    skills: ['Product Management', 'Analytics', 'A/B Testing', 'SQL', 'Figma'],
    interests: ['Growth Hacking', 'User Research', 'Behavioral Economics', 'SaaS'],
    bio: 'Senior Product Manager в Ламоде. Запустил 3 продукта с нуля. Специализируюсь на growth-стратегиях и data-driven решениях. Ищу co-founder для B2B проекта.',
    photo: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=400&fit=crop&crop=face',
    lookingFor: ['Product Management', 'Growth', 'Analytics', 'B2B SaaS'],
    experience: '3+ года',
    location: 'Москва, Россия'
  },
  {
    id: '8',
    name: 'Елена Кузнецова',
    age: 21,
    skills: ['Marketing', 'SMM', 'Content Strategy', 'SEO', 'Google Ads'],
    interests: ['Digital Marketing', 'Brand Building', 'Psychology', 'Creativity'],
    bio: 'Marketing Lead в GeekBrains. Выросла с junior до lead за 2 года. Запустила 10+ успешных кампаний. Хочу создать агentство для IT-стартапов.',
    photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face',
    lookingFor: ['Marketing', 'SMM', 'Brand', 'Creative'],
    experience: '2+ года',
    location: 'Москва, Россия'
  }
]

const skillsOptions = [
  'Python', 'JavaScript', 'Java', 'React', 'Vue.js', 'Angular', 'Node.js',
  'Spring', 'Django', 'Flask', 'Express', 'MongoDB', 'PostgreSQL', 'MySQL',
  'Docker', 'Kubernetes', 'AWS', 'GCP', 'Azure', 'Git', 'Linux',
  'UI/UX', 'Figma', 'Adobe Suite', 'Photoshop', 'Illustrator', 'Sketch',
  'HTML', 'CSS', 'SASS', 'TypeScript', 'C++', 'C#', 'Go', 'Rust', 'Swift',
  'Kotlin', 'Flutter', 'React Native', 'iOS', 'Android', 'Unity', 'Blender',
  'Machine Learning', 'Data Science', 'AI', 'TensorFlow', 'PyTorch',
  'Marketing', 'SMM', 'Content', 'Copywriting', 'Analytics', 'SEO', 'PPC',
  'Project Management', 'Agile', 'Scrum', 'Product Management',
  'English', 'Математика', 'Физика', 'Химия', 'Биология'
]

function App() {
  // Состояние приложения
  const [currentScreen, setCurrentScreen] = useState<'welcome' | 'register' | 'profile' | 'discover' | 'matches' | 'chat' | 'filters'>('welcome')
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [matches, setMatches] = useState<Match[]>([])
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0)
  const [selectedChat, setSelectedChat] = useState<Match | null>(null)
  const [likedProfiles, setLikedProfiles] = useState<string[]>([])
  
  // Состояние регистрации
  const [registrationStep, setRegistrationStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    age: 18,
    skills: [] as string[],
    interests: [] as string[],
    bio: '',
    photo: '🧑‍💻',
    lookingFor: [] as string[],
    experience: '',
    location: '',
    github: '',
    portfolio: ''
  })

  // Фильтрованные пользователи для показа
  const availableProfiles = mockUsers.filter(user => 
    user.id !== currentUser?.id && 
    !matches.some(match => match.user.id === user.id)
  )

  const handleRegistration = () => {
    const newUser: User = {
      id: Date.now().toString(),
      ...formData
    }
    setCurrentUser(newUser)
    setCurrentScreen('discover')
  }



  const toggleSkill = (skill: string, type: 'skills' | 'interests' | 'lookingFor') => {
    const current = formData[type]
    if (current.includes(skill)) {
      setFormData({
        ...formData,
        [type]: current.filter(s => s !== skill)
      })
    } else {
      setFormData({
        ...formData,
        [type]: [...current, skill]
      })
    }
  }

  const renderWelcomeScreen = () => (
    <div className="screen welcome-screen">
      <div className="welcome-background">
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
      </div>
      
      <div className="welcome-content">
        <div className="welcome-header">
          <div className="logo-modern">
            <div className="logo-icon-modern">
              <div className="icon-inner">⚡</div>
            </div>
            <div className="logo-text">
              <h1>Match</h1>
              <span className="logo-subtitle">Professional Network</span>
            </div>
          </div>
          <p className="tagline-modern">
            Место где <span className="highlight">таланты</span> находят друг друга
          </p>
        </div>

        <div className="stats-preview">
          <div className="stat-preview">
            <span className="stat-number-big">2.5K+</span>
            <span className="stat-label-big">Активных участников</span>
          </div>
          <div className="stat-preview">
            <span className="stat-number-big">450+</span>
            <span className="stat-label-big">Успешных проектов</span>
          </div>
          <div className="stat-preview">
            <span className="stat-number-big">95%</span>
            <span className="stat-label-big">Уровень satisfaction</span>
          </div>
        </div>

        <div className="feature-cards-modern">
          <div className="feature-card-modern">
            <div className="feature-icon-modern gradient-purple">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3>Найди dream team</h3>
            <p>Подключайся к талантливым профессионалам для реализации амбициозных идей</p>
          </div>
          <div className="feature-card-modern">
            <div className="feature-icon-modern gradient-blue">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5z"/>
              </svg>
            </div>
            <h3>Smart matching</h3>
            <p>Алгоритм подбирает идеальных партнеров на основе навыков и интересов</p>
          </div>
          <div className="feature-card-modern">
            <div className="feature-icon-modern gradient-green">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,18.5L10.5,17H7V15H10.5L12,13.5L13.5,15H17V17H13.5L12,18.5M12,6L10.5,7.5H7V9.5H10.5L12,11L13.5,9.5H17V7.5H13.5L12,6M12,2L15.09,8.26L22,9L17,14L18.18,21L12,17.77L5.82,21L7,14L2,9L8.91,8.26L12,2Z"/>
              </svg>
            </div>
            <h3>Создавай будущее</h3>
            <p>От идеи до MVP за несколько недель с командой единомышленников</p>
          </div>
        </div>

        <div className="social-proof">
          <div className="avatars-stack">
            <div className="avatar-circle">👨‍💻</div>
            <div className="avatar-circle">👩‍🎨</div>
            <div className="avatar-circle">👨‍💼</div>
            <div className="avatar-circle">👩‍💻</div>
          </div>
          <p className="social-text">
            <strong>2,500+ профессионалов</strong> уже создают проекты вместе
          </p>
        </div>

        <div className="welcome-actions-modern">
          <button className="cta-button-modern" onClick={() => setCurrentScreen('register')}>
            <span className="button-text">Присоединиться к сообществу</span>
            <div className="button-arrow">→</div>
          </button>
          <p className="terms-note">
            Бесплатно навсегда • Для специалистов 13+
          </p>
        </div>
      </div>
    </div>
  )

  const renderRegistrationScreen = () => (
    <div className="screen registration-screen">
      <div className="reg-header">
        <button className="back-button" onClick={() => setCurrentScreen('welcome')}>
          ← Назад
        </button>
        <div className="progress-bar">
          <div className="progress-fill" style={{width: `${(registrationStep / 4) * 100}%`}}></div>
        </div>
        <span className="step-counter">{registrationStep}/4</span>
      </div>

      {registrationStep === 1 && (
        <div className="reg-step">
          <h2>Расскажи о себе</h2>
          <div className="form-group">
            <label>Как тебя зовут?</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="Введи свое имя"
              className="text-input"
            />
          </div>
          <div className="form-group">
            <label>Возраст</label>
            <input
              type="number"
              value={formData.age}
              onChange={(e) => setFormData({...formData, age: parseInt(e.target.value)})}
              min="13"
              max="100"
              className="number-input"
            />
          </div>
          <div className="form-group">
            <label>Город</label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({...formData, location: e.target.value})}
              placeholder="Москва"
              className="text-input"
            />
          </div>
          <div className="form-group">
            <label>Выбери аватар</label>
            <div className="avatar-grid">
              {['🧑‍💻', '👩‍💻', '🎨', '📊', '🔬', '📱', '☕', '✨', '🚀', '💡', '🎯', '⚡'].map(emoji => (
                <button
                  key={emoji}
                  className={`avatar-option ${formData.photo === emoji ? 'selected' : ''}`}
                  onClick={() => setFormData({...formData, photo: emoji})}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {registrationStep === 2 && (
        <div className="reg-step">
          <h2>Твои навыки</h2>
          <p>Выбери то, что ты умеешь (можно несколько)</p>
          <div className="skills-grid">
            {skillsOptions.map(skill => (
              <button
                key={skill}
                className={`skill-chip ${formData.skills.includes(skill) ? 'selected' : ''}`}
                onClick={() => toggleSkill(skill, 'skills')}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>
      )}

      {registrationStep === 3 && (
        <div className="reg-step">
          <h2>Что тебя интересует?</h2>
          <p>Выбери сферы, в которых хочешь развиваться</p>
          <div className="skills-grid">
            {skillsOptions.map(skill => (
              <button
                key={skill}
                className={`skill-chip ${formData.lookingFor.includes(skill) ? 'selected' : ''}`}
                onClick={() => toggleSkill(skill, 'lookingFor')}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>
      )}

      {registrationStep === 4 && (
        <div className="reg-step">
          <h2>Последние штрихи</h2>
          <div className="form-group">
            <label>Расскажи о себе</label>
            <textarea
              value={formData.bio}
              onChange={(e) => setFormData({...formData, bio: e.target.value})}
              placeholder="Кто ты, чем занимаешься, что хочешь создать..."
              className="textarea-input"
              rows={4}
            />
          </div>
          <div className="form-group">
            <label>Опыт работы</label>
            <select
              value={formData.experience}
              onChange={(e) => setFormData({...formData, experience: e.target.value})}
              className="select-input"
            >
              <option value="">Выбери опыт</option>
              <option value="Новичок">Новичок</option>
              <option value="6 месяцев">6 месяцев</option>
              <option value="1 год">1 год</option>
              <option value="2 года">2 года</option>
              <option value="3+ года">3+ года</option>
              <option value="5+ лет">5+ лет</option>
            </select>
          </div>
          <div className="form-group">
            <label>GitHub (необязательно)</label>
            <input
              type="text"
              value={formData.github}
              onChange={(e) => setFormData({...formData, github: e.target.value})}
              placeholder="github.com/username"
              className="text-input"
            />
          </div>
        </div>
      )}

      <div className="reg-actions">
        {registrationStep > 1 && (
          <button 
            className="secondary-button" 
            onClick={() => setRegistrationStep(registrationStep - 1)}
          >
            Назад
          </button>
        )}
        {registrationStep < 4 ? (
          <button 
            className="primary-button"
            onClick={() => setRegistrationStep(registrationStep + 1)}
            disabled={registrationStep === 1 && !formData.name}
          >
            Далее
          </button>
        ) : (
          <button 
            className="primary-button"
            onClick={handleRegistration}
            disabled={!formData.bio || !formData.experience}
          >
            Готово! 🚀
          </button>
        )}
      </div>
    </div>
  )

  // Система свайпов
  const [swipeData, setSwipeData] = useState({
    startX: 0,
    currentX: 0,
    isDragging: false,
    direction: ''
  })

  // Состояние для flip карточек
  const [isCardFlipped, setIsCardFlipped] = useState(false)

  const handleTouchStart = (e: React.TouchEvent) => {
    setSwipeData({
      ...swipeData,
      startX: e.touches[0].clientX,
      currentX: e.touches[0].clientX,
      isDragging: true
    })
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!swipeData.isDragging) return
    
    const currentX = e.touches[0].clientX
    const diffX = currentX - swipeData.startX
    
    setSwipeData({
      ...swipeData,
      currentX,
      direction: Math.abs(diffX) > 50 ? (diffX > 0 ? 'right' : 'left') : ''
    })
  }

  const handleTouchEnd = () => {
    if (!swipeData.isDragging) return
    
    const diffX = swipeData.currentX - swipeData.startX
    
    // Увеличиваем порог для свайпа до 150px для более медленного свайпа
    if (Math.abs(diffX) > 150) {
      if (diffX > 0) {
        likeProfile()
      } else {
        skipProfile()
      }
    }
    
    setSwipeData({
      startX: 0,
      currentX: 0,
      isDragging: false,
      direction: ''
    })
  }

  const likeProfile = () => {
    const profile = availableProfiles[currentProfileIndex]
    if (profile) {
      // Добавляем в лайкнутые
      setLikedProfiles([...likedProfiles, profile.id])
      
      // Случайный матч (30% шанс)
      if (Math.random() > 0.7) {
        setMatches([...matches, {
          id: `match-${Date.now()}`,
          user: profile,
          timestamp: new Date(),
          lastMessage: 'Новый матч! Напишите первым 💫'
        }])
        // Показываем уведомление о матче
        setTimeout(() => {
          alert('🎉 IT\'S A MATCH! 🎉')
        }, 300)
      }
      
      setCurrentProfileIndex(currentProfileIndex + 1)
    }
  }

  const skipProfile = () => {
    setCurrentProfileIndex(currentProfileIndex + 1)
  }

  const renderDiscoverScreen = () => {
    const currentProfile = availableProfiles[currentProfileIndex]
    
    if (!currentProfile) {
      return (
        <div className="screen discover-screen">
          <div className="empty-state">
            <div className="empty-icon">🎉</div>
            <h2>Все профили просмотрены!</h2>
            <p>Новые талантливые люди появятся скоро</p>
            <button className="primary-button" onClick={() => setCurrentScreen('matches')}>
              Посмотреть совпадения
            </button>
          </div>
        </div>
      )
    }

    return (
      <div className="screen discover-screen">
        <div className="discover-header">
          <div className="header-title">
            <h2>Discover</h2>
            <p>Найди свою dream team</p>
          </div>
          <div className="profile-counter">
            {currentProfileIndex + 1} из {availableProfiles.length}
          </div>
        </div>

        <div className="profile-card-stack">
          {/* Карточки сзади для эффекта стека */}
          {availableProfiles.slice(currentProfileIndex + 1, currentProfileIndex + 3).map((profile, index) => (
            <div 
              key={profile.id} 
              className={`profile-card stack-card stack-${index + 1}`}
              style={{zIndex: 10 - index}}
            >
              <div className="profile-photo-container">
                <img 
                  src={profile.photo} 
                  alt={profile.name}
                  className="profile-photo-img"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%236366F1"/><text x="50" y="55" text-anchor="middle" fill="white" font-size="40">👤</text></svg>'
                  }}
                />
              </div>
            </div>
          ))}
          
          {/* Основная карточка с свайпами и флипом */}
          <div 
            className={`profile-card main-card ${swipeData.isDragging ? 'swiping' : ''} ${isCardFlipped ? 'flipped' : ''}`}
            style={{
              transform: swipeData.isDragging 
                ? `translateX(${swipeData.currentX - swipeData.startX}px) rotate(${Math.min(15, Math.max(-15, (swipeData.currentX - swipeData.startX) / 15))}deg)`
                : 'none',
              opacity: swipeData.isDragging 
                ? Math.max(0.7, 1 - Math.abs(swipeData.currentX - swipeData.startX) / 300)
                : 1
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onClick={() => {
              // Только если не свайпаем
              if (!swipeData.isDragging && Math.abs(swipeData.currentX - swipeData.startX) < 10) {
                setIsCardFlipped(!isCardFlipped)
              }
            }}
          >
            {/* Индикаторы свайпа */}
            {swipeData.direction && (
              <>
                <div className={`swipe-indicator like ${swipeData.direction === 'right' ? 'show' : ''}`}>
                  LIKE
                </div>
                <div className={`swipe-indicator nope ${swipeData.direction === 'left' ? 'show' : ''}`}>
                  NOPE
                </div>
              </>
            )}
            
            {/* Лицевая сторона - минимальная информация */}
            <div className="card-front">
              <div className="profile-photo-container">
                <img 
                  src={currentProfile.photo} 
                  alt={currentProfile.name}
                  className="profile-photo-img"
                />
              </div>
              
              <div className="card-info">
                <div className="main-info">
                  <h2 className="name">{currentProfile.name}</h2>
                  <div className="age-location">
                    <span className="age">{currentProfile.age} лет</span>
                    <span className="location">📍 {currentProfile.location}</span>
                  </div>
                </div>
                
                <div className="interests-preview">
                  {currentProfile.skills.slice(0, 3).map(skill => (
                    <span key={skill} className="skill-bubble">{skill}</span>
                  ))}
                  {currentProfile.skills.length > 3 && (
                    <span className="more-skills">+{currentProfile.skills.length - 3}</span>
                  )}
                </div>
                
                <div className="tap-hint">
                  <span>👆 Нажми для подробностей</span>
                </div>
              </div>
            </div>
            
            {/* Обратная сторона - детальная информация */}
            <div className="card-back">
              <div className="detailed-info">
                <div className="back-header">
                  <h3>{currentProfile.name}</h3>
                  <button 
                    className="flip-back-btn"
                    onClick={(e) => {
                      e.stopPropagation()
                      setIsCardFlipped(false)
                    }}
                  >
                    ✕
                  </button>
                </div>
                
                <div className="bio-section">
                  <h4>О себе</h4>
                  <p>{currentProfile.bio}</p>
                </div>
                
                <div className="skills-section">
                  <h4>Навыки</h4>
                  <div className="skills-grid">
                    {currentProfile.skills.map(skill => (
                      <span key={skill} className="skill-tag-detailed">{skill}</span>
                    ))}
                  </div>
                </div>
                
                <div className="experience-section">
                  <h4>Опыт работы</h4>
                  <span className="experience-badge">{currentProfile.experience}</span>
                </div>
                
                {(currentProfile.github || currentProfile.portfolio) && (
                  <div className="links-section">
                    <h4>Ссылки</h4>
                    <div className="links">
                      {currentProfile.github && (
                        <a href={`https://${currentProfile.github}`} className="link-btn github">
                          � GitHub
                        </a>
                      )}
                      {currentProfile.portfolio && (
                        <a href={`https://${currentProfile.portfolio}`} className="link-btn portfolio">
                          🌐 Портфолио
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="profile-content">
              <div className="profile-header">
                <div className="name-section">
                  <h3>{currentProfile.name.split(' ')[0]}</h3>
                  <div className="experience-badge">{currentProfile.experience}</div>
                </div>
                <div className="profile-actions-mini">
                  <button className="mini-action info">ℹ️</button>
                  {currentProfile.github && (
                    <button className="mini-action github">💻</button>
                  )}
                </div>
              </div>

              <div className="profile-bio">
                <p>{currentProfile.bio}</p>
              </div>

              <div className="skills-section">
                <div className="section-header">
                  <h4>💪 Экспертиза</h4>
                </div>
                <div className="skills-grid-modern">
                  {currentProfile.skills.slice(0, 4).map((skill, index) => (
                    <div key={skill} className={`skill-pill skill-${index}`}>
                      <span className="skill-text">{skill}</span>
                    </div>
                  ))}
                  {currentProfile.skills.length > 4 && (
                    <div className="skill-pill more-skills">
                      +{currentProfile.skills.length - 4}
                    </div>
                  )}
                </div>
              </div>

              <div className="interests-section">
                <div className="section-header">
                  <h4>🎯 Интересы</h4>
                </div>
                <div className="interests-grid">
                  {currentProfile.lookingFor.slice(0, 3).map(interest => (
                    <span key={interest} className="interest-pill">{interest}</span>
                  ))}
                </div>
              </div>

              <div className="profile-stats">
                <div className="stat-item">
                  <span className="stat-number">12</span>
                  <span className="stat-label">Проектов</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">4.9</span>
                  <span className="stat-label">Рейтинг</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">89%</span>
                  <span className="stat-label">Match rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="discover-actions-modern">
          <button className="action-button pass-button-modern" onClick={skipProfile}>
            <div className="button-icon">✕</div>
            <div className="button-label">Pass</div>
          </button>
          
          <button className="action-button superlike-button" onClick={likeProfile}>
            <div className="button-icon">⭐</div>
            <div className="button-label">Super</div>
          </button>
          
          <button className="action-button like-button-modern" onClick={likeProfile}>
            <div className="button-icon">⚡</div>
            <div className="button-label">Like</div>
          </button>
        </div>
      </div>
    )
  }

  const renderMatchesScreen = () => (
    <div className="screen matches-screen">
      <div className="matches-header">
        <h2>Твои совпадения</h2>
        <div className="matches-count">{matches.length} matches</div>
      </div>

      {matches.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">💫</div>
          <h3>Пока нет совпадений</h3>
          <p>Продолжай искать - твоя команда уже близко!</p>
          <button className="primary-button" onClick={() => setCurrentScreen('discover')}>
            Искать дальше
          </button>
        </div>
      ) : (
        <div className="matches-grid">
          {matches.map(match => (
            <div 
              key={match.id} 
              className="match-card"
              onClick={() => {
                setSelectedChat(match)
                setCurrentScreen('chat')
              }}
            >
              <div className="match-photo">{match.user.photo}</div>
              <div className="match-info">
                <h4>{match.user.name}</h4>
                <p>{match.user.skills.slice(0, 2).join(', ')}</p>
                <span className="match-time">
                  {match.timestamp.toLocaleDateString()}
                </span>
              </div>
              <div className="match-indicator">�</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )

  interface ChatMessage {
    id: number
    text: string
    sender: string
    timestamp: Date
  }

  const [chatMessages, setChatMessages] = useState<{[key: string]: ChatMessage[]}>({})
  const [newMessage, setNewMessage] = useState('')

  const renderChatScreen = () => {
    if (!selectedChat) return null

    const chatId = selectedChat.id
    const messages = chatMessages[chatId] || [
      {
        id: 1,
        text: `Привет! Я видел твои навыки в ${currentUser?.skills[0]}, круто! 🚀`,
        sender: selectedChat.user.name,
        timestamp: new Date()
      }
    ]

    const sendMessage = () => {
      if (newMessage.trim()) {
        const newMsg = {
          id: messages.length + 1,
          text: newMessage,
          sender: currentUser?.name || 'Вы',
          timestamp: new Date()
        }
        setChatMessages({
          ...chatMessages,
          [chatId]: [...messages, newMsg]
        })
        setNewMessage('')
      }
    }

    return (
      <div className="screen chat-screen">
        <div className="chat-header">
          <button 
            className="back-button" 
            onClick={() => setCurrentScreen('matches')}
          >
            ←
          </button>
          <div className="chat-user-info">
            <div className="chat-avatar">
              <img src={selectedChat.user.photo} alt={selectedChat.user.name} />
            </div>
            <div>
              <h3>{selectedChat.user.name}</h3>
              <p>онлайн • {selectedChat.user.location}</p>
            </div>
          </div>
          <button className="chat-options">⋮</button>
        </div>

        <div className="chat-messages">
          {messages.map(message => (
            <div 
              key={message.id} 
              className={`message ${message.sender === currentUser?.name ? 'sent' : 'received'}`}
            >
              <p>{message.text}</p>
              <div className="message-footer">
                <span className="message-time">
                  {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                </span>
                {message.sender === currentUser?.name && (
                  <span className="message-status">✓✓</span>
                )}
              </div>
            </div>
          ))}
          
          {/* Typing indicator для реализма */}
          {messages.length > 0 && messages.length % 3 === 0 && (
            <div className="typing-indicator">
              <div className="typing-dot"></div>
              <div className="typing-dot"></div>
              <div className="typing-dot"></div>
            </div>
          )}
        </div>

        <div className="chat-input">
          <button className="attachment-button" title="Прикрепить файл">
            📎
          </button>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Сообщение..."
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            className="message-input"
          />
          {newMessage.trim() ? (
            <button className="send-button" onClick={sendMessage} title="Отправить">
              ✈️
            </button>
          ) : (
            <button className="voice-button" title="Голосовое сообщение">
              🎤
            </button>
          )}
        </div>
      </div>
    )
  }

  const renderProfileScreen = () => (
    <div className="screen profile-screen">
      <div className="profile-header">
        <h2>Твой профиль</h2>
      </div>
      
      <div className="user-profile-card">
        <div className="user-photo">
          <img src={currentUser?.photo} alt={currentUser?.name} />
        </div>
        <h3>{currentUser?.name}, {currentUser?.age}</h3>
        <p className="user-location">📍 {currentUser?.location}</p>
        <p className="user-bio">{currentUser?.bio}</p>
        
        <div className="profile-stats">
          <div className="profile-stat">
            <span className="profile-stat-number">47</span>
            <span className="profile-stat-label">Матчей</span>
          </div>
          <div className="profile-stat">
            <span className="profile-stat-number">12</span>
            <span className="profile-stat-label">Встреч</span>
          </div>
          <div className="profile-stat">
            <span className="profile-stat-number">156</span>
            <span className="profile-stat-label">Связей</span>
          </div>
        </div>
        
        <div className="user-skills-section">
          <h4>Навыки и экспертиза</h4>
          <div className="skills-list">
            {currentUser?.skills.map(skill => (
              <span key={skill} className="skill-tag user-skill">{skill}</span>
            ))}
          </div>
        </div>

        <div className="user-interests-section">
          <h4>Интересы:</h4>
          <div className="skills-list">
            {currentUser?.lookingFor.map(interest => (
              <span key={interest} className="interest-tag">{interest}</span>
            ))}
          </div>
        </div>
      </div>

      <button 
        className="secondary-button" 
        onClick={() => setCurrentScreen('welcome')}
        style={{marginTop: '20px'}}
      >
        Выйти из аккаунта
      </button>
    </div>
  )

  return (
    <div className="app">
      {currentScreen === 'welcome' && renderWelcomeScreen()}
      {currentScreen === 'register' && renderRegistrationScreen()}
      {currentScreen === 'discover' && renderDiscoverScreen()}
      {currentScreen === 'matches' && renderMatchesScreen()}
      {currentScreen === 'chat' && renderChatScreen()}
      {currentScreen === 'profile' && renderProfileScreen()}

      {currentUser && currentScreen !== 'register' && currentScreen !== 'welcome' && (
        <div className="bottom-navigation">
          <button 
            className={`nav-button ${currentScreen === 'discover' ? 'active' : ''}`}
            onClick={() => setCurrentScreen('discover')}
          >
            <span className="nav-icon">🔍</span>
            <span className="nav-label">Поиск</span>
          </button>
          <button 
            className={`nav-button ${currentScreen === 'matches' ? 'active' : ''}`}
            onClick={() => setCurrentScreen('matches')}
          >
            <span className="nav-icon">⚡</span>
            <span className="nav-label">Matches</span>
            {matches.length > 0 && <span className="nav-badge">{matches.length}</span>}
          </button>
          <button 
            className={`nav-button ${currentScreen === 'profile' ? 'active' : ''}`}
            onClick={() => setCurrentScreen('profile')}
          >
            <span className="nav-icon">👤</span>
            <span className="nav-label">Профиль</span>
          </button>
        </div>
      )}
    </div>
  )
}

export default App