// MBTI测试结果展示

// MBTI类型描述
const mbtiDescriptions = {
    INTJ: {
        name: "建筑师",
        description: "INTJ类型的人是完美主义者，具有强烈的洞察力和战略思维能力。他们擅长分析复杂的问题，制定长远的计划，并以逻辑和理性为导向。他们是独立的思考者，对自己和他人都有很高的标准。"
    },
    INTP: {
        name: "逻辑学家",
        description: "INTP类型的人是好奇的思考者，喜欢探索理论和概念。他们善于分析和解决问题，对知识有强烈的渴望。他们是灵活的思想家，喜欢挑战传统观念，寻求新的可能性。"
    },
    ENTJ: {
        name: "指挥官",
        description: "ENTJ类型的人是天生的领导者，具有强烈的目标导向和决策能力。他们擅长组织和管理，能够制定有效的策略并激励他人。他们是果断的行动者，喜欢挑战和竞争。"
    },
    ENTP: {
        name: "辩论家",
        description: "ENTP类型的人是充满创意的思想家，喜欢挑战和辩论。他们善于发现新的机会和可能性，具有出色的问题解决能力。他们是灵活的适应者，喜欢变化和刺激。"
    },
    INFJ: {
        name: "提倡者",
        description: "INFJ类型的人是理想主义者，具有强烈的价值观和同理心。他们擅长理解他人的情感和需求，致力于帮助他人实现潜力。他们是深思熟虑的决策者，追求意义和目的。"
    },
    INFP: {
        name: "调停者",
        description: "INFP类型的人是敏感的理想主义者，具有强烈的个人价值观。他们善于理解他人的情感，追求和谐和真实性。他们是创造性的思考者，重视个人成长和自我表达。"
    },
    ENFJ: {
        name: "主人公",
        description: "ENFJ类型的人是热情的领导者，具有强烈的同理心和社交能力。他们擅长激励和引导他人，致力于创造积极的变化。他们是果断的决策者，重视和谐和合作。"
    },
    ENFP: {
        name: "竞选者",
        description: "ENFP类型的人是充满活力的探索者，具有强烈的好奇心和创造力。他们擅长与人交流和建立关系，喜欢新的体验和挑战。他们是灵活的思考者，追求个人成长和意义。"
    },
    ISTJ: {
        name: " logistician",
        description: "ISTJ类型的人是务实的组织者，具有强烈的责任感和可靠性。他们擅长执行计划和遵循规则，重视传统和稳定性。他们是细致的工作者，注重细节和准确性。"
    },
    ISFJ: {
        name: "守卫者",
        description: "ISFJ类型的人是忠诚的保护者，具有强烈的责任感和同理心。他们擅长照顾他人的需求，重视和谐和稳定。他们是细致的工作者，注重传统和价值观。"
    },
    ESTJ: {
        name: "执行官",
        description: "ESTJ类型的人是务实的领导者，具有强烈的责任感和组织能力。他们擅长管理和执行，重视规则和秩序。他们是果断的决策者，注重效率和结果。"
    },
    ESFJ: {
        name: "领事",
        description: "ESFJ类型的人是热情的照顾者，具有强烈的责任感和社交能力。他们擅长与人交流和建立关系，重视和谐和传统。他们是细致的工作者，注重他人的需求。"
    },
    ISTP: {
        name: "鉴赏家",
        description: "ISTP类型的人是灵活的问题解决者，具有强烈的实践能力和好奇心。他们擅长分析和解决实际问题，喜欢动手操作和探索。他们是独立的思考者，注重效率和结果。"
    },
    ISFP: {
        name: "探险家",
        description: "ISFP类型的人是敏感的艺术家，具有强烈的个人价值观和创造力。他们擅长表达自己的情感和想法，喜欢新的体验和挑战。他们是灵活的思考者，注重个人成长和自我表达。"
    },
    ESTP: {
        name: "企业家",
        description: "ESTP类型的人是充满活力的行动者，具有强烈的实践能力和冒险精神。他们擅长应对变化和挑战，喜欢新的体验和刺激。他们是果断的决策者，注重效率和结果。"
    },
    ESFP: {
        name: "表演者",
        description: "ESFP类型的人是热情的社交者，具有强烈的表现力和创造力。他们擅长与人交流和建立关系，喜欢新的体验和挑战。他们是灵活的思考者，注重当下和享受生活。"
    }
};

// 维度描述
const dimensionDescriptions = {
    IE: {
        I: "你倾向于内向，喜欢独处和反思。你从内部获得能量，需要时间来处理信息和恢复精力。",
        E: "你倾向于外向，喜欢社交和互动。你从外部获得能量，通过与他人交流来获取灵感和动力。"
    },
    SN: {
        S: "你倾向于感觉，关注当前的事实和细节。你相信具体的、可验证的信息，注重实际应用和结果。",
        N: "你倾向于直觉，关注未来的可能性和模式。你相信灵感和直觉，注重理论和概念的探索。"
    },
    TF: {
        T: "你倾向于思考，注重逻辑和客观分析。你在做决定时优先考虑理性和公正性，不受情感因素的影响。",
        F: "你倾向于情感，注重个人价值观和他人的感受。你在做决定时优先考虑和谐和人际关系，重视情感因素。"
    },
    JP: {
        J: "你倾向于判断，喜欢有计划、有组织的生活方式。你提前安排好事情，喜欢明确的规则和结构。",
        P: "你倾向于感知，喜欢灵活、即兴的生活方式。你随遇而安，喜欢模糊和不确定的情况，享受探索的过程。"
    }
};

// DOM元素
const mbtiTypeElement = document.getElementById('mbti-type');
const typeDescriptionElement = document.getElementById('type-description');
const ieBarElement = document.getElementById('ie-bar');
const snBarElement = document.getElementById('sn-bar');
const tfBarElement = document.getElementById('tf-bar');
const jpBarElement = document.getElementById('jp-bar');
const ieDescriptionElement = document.getElementById('ie-description');
const snDescriptionElement = document.getElementById('sn-description');
const tfDescriptionElement = document.getElementById('tf-description');
const jpDescriptionElement = document.getElementById('jp-description');
const shareBtn = document.getElementById('share-btn');

// 加载结果
function loadResult() {
    // 从本地存储获取结果
    const mbtiType = localStorage.getItem('mbtiType');
    const scoresJson = localStorage.getItem('mbtiScores');
    
    if (!mbtiType || !scoresJson) {
        // 如果没有结果，重定向到首页
        window.location.href = 'index.html';
        return;
    }
    
    const scores = JSON.parse(scoresJson);
    
    // 显示MBTI类型和描述
    if (mbtiDescriptions[mbtiType]) {
        mbtiTypeElement.textContent = mbtiType + " - " + mbtiDescriptions[mbtiType].name;
        typeDescriptionElement.innerHTML = `<p>${mbtiDescriptions[mbtiType].description}</p>`;
    } else {
        mbtiTypeElement.textContent = mbtiType;
        typeDescriptionElement.innerHTML = `<p>暂无该类型的详细描述。</p>`;
    }
    
    // 显示维度分析
    displayDimension('IE', scores.IE, ieBarElement, ieDescriptionElement);
    displayDimension('SN', scores.SN, snBarElement, snDescriptionElement);
    displayDimension('TF', scores.TF, tfBarElement, tfDescriptionElement);
    displayDimension('JP', scores.JP, jpBarElement, jpDescriptionElement);
}

// 显示维度分析
function displayDimension(dimension, score, barElement, descriptionElement) {
    // 计算百分比（0-100）
    const absoluteScore = Math.abs(score);
    const maxPossibleScore = 20; // 每个维度10题，每题最高2分（5-3）
    const percentage = Math.min((absoluteScore / maxPossibleScore) * 100, 100);
    
    // 设置进度条
    barElement.style.width = percentage + '%';
    
    // 确定倾向
    const倾向 = score < 0 ? dimension[0] : dimension[1];
    
    // 显示描述
    if (dimensionDescriptions[dimension][倾向]) {
        descriptionElement.textContent = dimensionDescriptions[dimension][倾向];
    } else {
        descriptionElement.textContent = `你在${dimension}维度上的倾向不明显。`;
    }
}

// 分享功能
function shareResult() {
    const mbtiType = localStorage.getItem('mbtiType');
    if (mbtiType) {
        const message = `我的MBTI性格类型是${mbtiType}！来测试一下你的性格类型吧！`;
        const url = window.location.origin + window.location.pathname.replace('result.html', 'index.html');
        
        // 检查是否支持Web Share API
        if (navigator.share) {
            navigator.share({
                title: 'MBTI测试结果',
                text: message,
                url: url
            })
            .catch(err => {
                console.log('分享失败:', err);
                // 回退到复制链接
                copyToClipboard(url);
            });
        } else {
            // 回退到复制链接
            copyToClipboard(url);
        }
    }
}

// 复制到剪贴板
function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
    .then(() => {
        alert('链接已复制到剪贴板，快去分享吧！');
    })
    .catch(err => {
        console.log('复制失败:', err);
        alert('复制失败，请手动复制链接。');
    });
}

// 事件监听器
shareBtn.addEventListener('click', shareResult);

// 加载结果
loadResult();