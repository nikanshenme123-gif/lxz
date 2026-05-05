// 统一数据管理器
class DataManager {
    static init() {
        const defaultData = {
            hero: {
                title: '未来世界',
                description: '欢迎来到MCQWQ服务器，开启你的冒险之旅！',
                features: [
                    { icon: '🏠', title: '完善的领地系统', description: '保护你的建筑和财产，不受他人破坏' },
                    { icon: '💰', title: '经济系统', description: '通过劳动和交易获得财富' },
                    { icon: '⚔️', title: 'PVP战场', description: '展示你的战斗技巧，赢得荣誉' },
                    { icon: '🏆', title: '定期活动', description: '参与各种活动，赢取丰厚奖励' },
                    { icon: '🔧', title: '多种插件', description: '丰富的游戏内容，提升游戏体验' },
                    { icon: '👥', title: '友好社区', description: '结交新朋友，一起建设美好世界' }
                ]
            },
            status: {
                version: '1.20.1',
                players: '500+',
                uptime: '99.9%',
                startDate: '2024-01-01'
            },
            announcements: [
                { date: '2026-03-25', title: '服务器升级完成', content: '我们已完成服务器硬件升级，现在游戏运行更加流畅，欢迎大家体验！' },
                { date: '2026-03-20', title: '春季建筑大赛开始报名', content: '春季建筑大赛正式开始报名，主题为"未来城市"，丰厚奖励等你来拿！' },
                { date: '2026-03-15', title: '新插件上线', content: '新增家园保护插件和经济系统，让游戏体验更加丰富有趣。' }
            ],
            staff: {
                owner: { name: 'Admin', rank: '服务器所有者', avatar: '' },
                admins: [
                    { name: 'Moderator1', rank: '管理员', avatar: '' },
                    { name: 'Moderator2', rank: '管理员', avatar: '' }
                ],
                mods: [
                    { name: 'Mod1', rank: '版主', avatar: '' },
                    { name: 'Mod2', rank: '版主', avatar: '' },
                    { name: 'Mod3', rank: '版主', avatar: '' }
                ],
                helpers: [
                    { name: 'Helper1', rank: '助手', avatar: '' },
                    { name: 'Helper2', rank: '助手', avatar: '' },
                    { name: 'Helper3', rank: '助手', avatar: '' },
                    { name: 'Helper4', rank: '助手', avatar: '' }
                ]
            },
            rules: {
                sections: [
                    {
                        title: '基本行为准则',
                        type: 'list',
                        items: [
                            { title: '尊重他人', content: '不得侮辱、歧视或骚扰其他玩家' },
                            { title: '禁止作弊', content: '使用作弊客户端、辅助工具等行为将被永久封禁' },
                            { title: '保护隐私', content: '不得泄露他人个人信息' },
                            { title: '文明交流', content: '在聊天中保持文明，禁止发布不良内容' },
                            { title: '遵守规则', content: '遵守服务器的各项规则，配合管理员工作' }
                        ]
                    },
                    {
                        title: '建筑与领地规则',
                        type: 'list',
                        items: [
                            { title: '领地保护', content: '使用 /claim 命令保护你的领地' },
                            { title: '建筑规范', content: '不得建造过于接近他人领地的建筑' },
                            { title: '公共区域', content: '公共区域的建筑需符合服务器主题' },
                            { title: '资源采集', content: '合理采集资源，不得破坏环境' },
                            { title: '红石机器', content: '大型红石机器需经管理员批准' }
                        ]
                    },
                    {
                        title: 'PVP规则',
                        type: 'list',
                        items: [
                            { title: 'PVP区域', content: '只有在指定PVP区域可以攻击其他玩家' },
                            { title: '公平竞技', content: '不得使用不公平的装备或战术' },
                            { title: '死亡掉落', content: 'PVP死亡后物品会掉落，请谨慎行事' },
                            { title: '恶意杀害', content: '禁止无理由杀害其他玩家' },
                            { title: '竞技场', content: '使用竞技场进行公平的PVP对战' }
                        ]
                    },
                    {
                        title: '交易与经济规则',
                        type: 'list',
                        items: [
                            { title: '公平交易', content: '交易需双方自愿，不得欺诈' },
                            { title: '价格合理', content: '物品价格应符合市场行情' },
                            { title: '商店经营', content: '开设商店需遵守相关规定' },
                            { title: '货币使用', content: '不得利用漏洞刷取货币' },
                            { title: '交易纠纷', content: '交易纠纷请联系管理员处理' }
                        ]
                    },
                    {
                        title: '违规处罚',
                        type: 'list',
                        items: [
                            { title: '轻微违规', content: '警告' },
                            { title: '中度违规', content: '临时封禁' },
                            { title: '严重违规', content: '永久封禁' },
                            { title: '屡教不改', content: 'IP封禁' },
                            { title: '破坏行为', content: '清除不良建筑' }
                        ]
                    },
                    {
                        title: '申诉与举报',
                        type: 'list',
                        items: [
                            { title: '申诉渠道', content: '通过QQ群或网站联系管理员' },
                            { title: '举报方式', content: '使用 /report 命令举报违规行为' },
                            { title: '证据提供', content: '举报时请提供截图等证据' },
                            { title: '处理时间', content: '管理员会在24小时内处理申诉' },
                            { title: '诬告处理', content: '恶意诬告他人将视情节轻重给予相应处罚' }
                        ]
                    }
                ]
            },
            commands: {
                categories: [
                    { name: '基础指令', color: '#00a8e8' },
                    { name: '经济指令', color: '#00d4aa' },
                    { name: '领地指令', color: '#ff6b6b' },
                    { name: 'PVP指令', color: '#ff9f43' }
                ],
                commands: [
                    { name: '/help', description: '查看帮助信息', usage: '/help', category: '基础指令' },
                    { name: '/spawn', description: '返回出生点', usage: '/spawn', category: '基础指令' },
                    { name: '/home', description: '返回家', usage: '/home', category: '基础指令' },
                    { name: '/sethome', description: '设置家', usage: '/sethome', category: '基础指令' },
                    { name: '/money', description: '查看余额', usage: '/money', category: '经济指令' },
                    { name: '/pay', description: '给玩家钱', usage: '/pay <玩家> <金额>', category: '经济指令' },
                    { name: '/shop', description: '打开商店', usage: '/shop', category: '经济指令' },
                    { name: '/claim', description: '认领领地', usage: '/claim', category: '领地指令' },
                    { name: '/unclaim', description: '放弃领地', usage: '/unclaim', category: '领地指令' },
                    { name: '/trust', description: '信任玩家', usage: '/trust <玩家>', category: '领地指令' },
                    { name: '/pvp', description: '开启PVP', usage: '/pvp', category: 'PVP指令' },
                    { name: '/arena', description: '进入竞技场', usage: '/arena', category: 'PVP指令' }
                ]
            },
            gallery: {
                categories: [
                    { name: '建筑作品', color: '#00a8e8' },
                    { name: '自然风光', color: '#00d4aa' },
                    { name: '玩家活动', color: '#ff6b6b' },
                    { name: '服务器设施', color: '#ff9f43' }
                ],
                images: [
                    {
                        title: '主城',
                        description: '服务器主城市，包含各种设施',
                        image: '',
                        category: '服务器设施'
                    },
                    {
                        title: '末地城堡',
                        description: '玩家建造的末地城堡',
                        image: '',
                        category: '建筑作品'
                    },
                    {
                        title: '海底神殿',
                        description: '精美的海底建筑',
                        image: '',
                        category: '建筑作品'
                    }
                ]
            },
            joinGuide: {
                sections: [
                    {
                        title: '第一步：下载游戏',
                        content: '首先，你需要拥有 Minecraft 游戏。我们的服务器使用 1.20.1 版本，所以请确保你下载的是这个版本。',
                        steps: [
                            '访问 Minecraft 官网或启动器',
                            '下载并安装 Minecraft 1.20.1 版本',
                            '启动游戏并登录你的账号'
                        ]
                    },
                    {
                        title: '第二步：添加服务器',
                        content: '打开 Minecraft 后，你需要添加我们的服务器。',
                        steps: [
                            '点击 "多人游戏"',
                            '点击 "添加服务器"',
                            '输入服务器名称（例如：MCQWQ）',
                            '输入服务器 IP：mcqwq.top',
                            '端口使用默认端口 25565',
                            '点击 "完成"'
                        ]
                    },
                    {
                        title: '第三步：加入服务器',
                        content: '现在你可以加入服务器开始游戏了！',
                        steps: [
                            '在服务器列表中找到 "MCQWQ"',
                            '点击 "加入服务器"',
                            '等待连接成功',
                            '开始你的冒险之旅！'
                        ]
                    },
                    {
                        title: '第四步：开始游戏',
                        content: '加入服务器后，你可以开始探索和建设。',
                        steps: [
                            '使用 /spawn 命令返回出生点',
                            '查看服务器规则了解相关规定',
                            '使用 /help 命令查看可用指令',
                            '开始你的创造之旅！'
                        ]
                    }
                ]
            }
        };
        
        const existingData = localStorage.getItem('mcqwqData');
        if (!existingData) {
            localStorage.setItem('mcqwqData', JSON.stringify(defaultData));
        }
    }
    
    static get(key) {
        const data = JSON.parse(localStorage.getItem('mcqwqData')) || {};
        const storedData = data[key];
        const defaultData = this.getDefault(key);
        
        // 如果存储的数据存在，就使用它；否则使用默认数据
        if (storedData) {
            return storedData;
        } else {
            return defaultData;
        }
    }
    
    static set(key, value) {
        const data = JSON.parse(localStorage.getItem('mcqwqData')) || {};
        data[key] = value;
        localStorage.setItem('mcqwqData', JSON.stringify(data));
    }
    
    static getDefault(key) {
        // 返回完整的默认数据
        const defaultData = {
            hero: {
                title: '未来世界',
                description: '欢迎来到MCQWQ服务器，开启你的冒险之旅！',
                features: [
                    { icon: '🏠', title: '完善的领地系统', description: '保护你的建筑和财产，不受他人破坏' },
                    { icon: '💰', title: '经济系统', description: '通过劳动和交易获得财富' },
                    { icon: '⚔️', title: 'PVP战场', description: '展示你的战斗技巧，赢得荣誉' },
                    { icon: '🏆', title: '定期活动', description: '参与各种活动，赢取丰厚奖励' },
                    { icon: '🔧', title: '多种插件', description: '丰富的游戏内容，提升游戏体验' },
                    { icon: '👥', title: '友好社区', description: '结交新朋友，一起建设美好世界' }
                ]
            },
            status: {
                version: '1.20.1',
                players: '500+',
                uptime: '99.9%',
                startDate: '2024-01-01'
            },
            announcements: [
                { date: '2026-03-25', title: '服务器升级完成', content: '我们已完成服务器硬件升级，现在游戏运行更加流畅，欢迎大家体验！' },
                { date: '2026-03-20', title: '春季建筑大赛开始报名', content: '春季建筑大赛正式开始报名，主题为"未来城市"，丰厚奖励等你来拿！' },
                { date: '2026-03-15', title: '新插件上线', content: '新增家园保护插件和经济系统，让游戏体验更加丰富有趣。' }
            ],
            staff: {
                owner: { name: 'Admin', rank: '服务器所有者', avatar: '' },
                admins: [
                    { name: 'Moderator1', rank: '管理员', avatar: '' },
                    { name: 'Moderator2', rank: '管理员', avatar: '' }
                ],
                mods: [
                    { name: 'Mod1', rank: '版主', avatar: '' },
                    { name: 'Mod2', rank: '版主', avatar: '' },
                    { name: 'Mod3', rank: '版主', avatar: '' }
                ],
                helpers: [
                    { name: 'Helper1', rank: '助手', avatar: '' },
                    { name: 'Helper2', rank: '助手', avatar: '' },
                    { name: 'Helper3', rank: '助手', avatar: '' },
                    { name: 'Helper4', rank: '助手', avatar: '' }
                ]
            },
            rules: {
                sections: [
                    {
                        title: '基本行为准则',
                        type: 'list',
                        items: [
                            { title: '尊重他人', content: '禁止辱骂、歧视、骚扰其他玩家。' },
                            { title: '禁止作弊', content: '严禁使用任何外挂、作弊客户端。' },
                            { title: '禁止恶意破坏', content: '不得恶意破坏其他玩家的建筑。' },
                            { title: '保护隐私', content: '不得泄露他人个人信息。' },
                            { title: '文明交流', content: '在聊天中保持文明，禁止发布不良内容。' }
                        ]
                    },
                    {
                        title: '建筑与领地规则',
                        type: 'list',
                        items: [
                            { title: '领地保护', content: '使用 /claim 命令保护你的领地。' },
                            { title: '建筑规范', content: '不得建造过于接近他人领地的建筑。' },
                            { title: '公共区域', content: '公共区域的建筑需符合服务器主题。' },
                            { title: '资源采集', content: '合理采集资源，不得破坏环境。' },
                            { title: '红石机器', content: '大型红石机器需经管理员批准。' }
                        ]
                    },
                    {
                        title: 'PVP规则',
                        type: 'list',
                        items: [
                            { title: 'PVP区域', content: '只有在指定PVP区域可以攻击其他玩家。' },
                            { title: '公平竞技', content: '不得使用不公平的装备或战术。' },
                            { title: '死亡掉落', content: 'PVP死亡后物品会掉落，请谨慎行事。' },
                            { title: '恶意杀害', content: '禁止无理由杀害其他玩家。' },
                            { title: '竞技场', content: '使用竞技场进行公平的PVP对战。' }
                        ]
                    },
                    {
                        title: '交易与经济规则',
                        type: 'list',
                        items: [
                            { title: '公平交易', content: '交易需双方自愿，不得欺诈。' },
                            { title: '价格合理', content: '物品价格应符合市场行情。' },
                            { title: '商店经营', content: '开设商店需遵守相关规定。' },
                            { title: '货币使用', content: '不得利用漏洞刷取货币。' },
                            { title: '交易纠纷', content: '交易纠纷请联系管理员处理。' }
                        ]
                    },
                    {
                        title: '违规处罚',
                        type: 'list',
                        items: [
                            { title: '轻微违规', content: '警告' },
                            { title: '中度违规', content: '临时封禁' },
                            { title: '严重违规', content: '永久封禁' },
                            { title: '屡教不改', content: 'IP封禁' },
                            { title: '破坏行为', content: '清除不良建筑' }
                        ]
                    },
                    {
                        title: '申诉与举报',
                        type: 'list',
                        items: [
                            { title: '申诉渠道', content: '通过QQ群或网站联系管理员。' },
                            { title: '举报方式', content: '使用 /report 命令举报违规行为。' },
                            { title: '证据提供', content: '举报时请提供截图等证据。' },
                            { title: '处理时间', content: '管理员会在24小时内处理申诉。' },
                            { title: '诬告处理', content: '恶意诬告他人将视情节轻重给予相应处罚。' }
                        ]
                    }
                ]
            },
            commands: {
                categories: [
                    { name: '基础指令', color: '#00a8e8' },
                    { name: '经济指令', color: '#00d4aa' },
                    { name: '领地指令', color: '#ff6b6b' },
                    { name: 'PVP指令', color: '#ff9f43' }
                ],
                commands: [
                    { name: '/help', description: '查看帮助信息', usage: '/help', category: '基础指令' },
                    { name: '/spawn', description: '返回出生点', usage: '/spawn', category: '基础指令' },
                    { name: '/home', description: '返回家', usage: '/home', category: '基础指令' },
                    { name: '/sethome', description: '设置家', usage: '/sethome', category: '基础指令' },
                    { name: '/money', description: '查看余额', usage: '/money', category: '经济指令' },
                    { name: '/pay', description: '给玩家钱', usage: '/pay <玩家> <金额>', category: '经济指令' },
                    { name: '/shop', description: '打开商店', usage: '/shop', category: '经济指令' },
                    { name: '/claim', description: '认领领地', usage: '/claim', category: '领地指令' },
                    { name: '/unclaim', description: '放弃领地', usage: '/unclaim', category: '领地指令' },
                    { name: '/trust', description: '信任玩家', usage: '/trust <玩家>', category: '领地指令' },
                    { name: '/pvp', description: '开启PVP', usage: '/pvp', category: 'PVP指令' },
                    { name: '/arena', description: '进入竞技场', usage: '/arena', category: 'PVP指令' }
                ]
            },
            gallery: {
                categories: [
                    { name: '建筑作品', color: '#00a8e8' },
                    { name: '自然风光', color: '#00d4aa' },
                    { name: '玩家活动', color: '#ff6b6b' },
                    { name: '服务器设施', color: '#ff9f43' }
                ],
                images: [
                    {
                        title: '主城',
                        description: '服务器主城市，包含各种设施',
                        image: '',
                        category: '服务器设施'
                    },
                    {
                        title: '末地城堡',
                        description: '玩家建造的末地城堡',
                        image: '',
                        category: '建筑作品'
                    },
                    {
                        title: '海底神殿',
                        description: '精美的海底建筑',
                        image: '',
                        category: '建筑作品'
                    }
                ]
            },
            joinGuide: {
                sections: [
                    {
                        title: '第一步：下载游戏',
                        content: '首先，你需要拥有 Minecraft 游戏。我们的服务器使用 1.20.1 版本，所以请确保你下载的是这个版本。',
                        steps: [
                            '访问 Minecraft 官网或启动器',
                            '下载并安装 Minecraft 1.20.1 版本',
                            '启动游戏并登录你的账号'
                        ]
                    },
                    {
                        title: '第二步：添加服务器',
                        content: '打开 Minecraft 后，你需要添加我们的服务器。',
                        steps: [
                            '点击 "多人游戏"',
                            '点击 "添加服务器"',
                            '输入服务器名称（例如：MCQWQ）',
                            '输入服务器 IP：mcqwq.top',
                            '端口使用默认端口 25565',
                            '点击 "完成"'
                        ]
                    },
                    {
                        title: '第三步：加入服务器',
                        content: '现在你可以加入服务器开始游戏了！',
                        steps: [
                            '在服务器列表中找到 "MCQWQ"',
                            '点击 "加入服务器"',
                            '等待连接成功',
                            '开始你的冒险之旅！'
                        ]
                    },
                    {
                        title: '第四步：开始游戏',
                        content: '加入服务器后，你可以开始探索和建设。',
                        steps: [
                            '使用 /spawn 命令返回出生点',
                            '查看服务器规则了解相关规定',
                            '使用 /help 命令查看可用指令',
                            '开始你的创造之旅！'
                        ]
                    }
                ]
            }
        };
        return defaultData[key];
    }
}

// 文件管理器（处理图片上传）
class FileManager {
    static async uploadImage(file, type) {
        if (!file) throw new Error('请选择文件');
        
        const maxSize = 5 * 1024 * 1024; // 5MB
        if (file.size > maxSize) {
            throw new Error('文件大小不能超过5MB');
        }
        
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
        if (!allowedTypes.includes(file.type)) {
            throw new Error('只支持 JPG、PNG、GIF、WebP 格式');
        }
        
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = function(e) {
                const base64 = e.target.result;
                const timestamp = Date.now();
                const path = `${type}_${timestamp}.${file.name.split('.').pop()}`;
                
                // 保存到本地存储
                const images = JSON.parse(localStorage.getItem('mcqwqImages')) || {};
                images[path] = base64;
                localStorage.setItem('mcqwqImages', JSON.stringify(images));
                
                resolve({ url: base64, path: path });
            };
            reader.onerror = function() {
                reject(new Error('文件读取失败'));
            };
            reader.readAsDataURL(file);
        });
    }
    
    static getImage(path) {
        const images = JSON.parse(localStorage.getItem('mcqwqImages')) || {};
        return images[path] || '';
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { DataManager, FileManager };
}
