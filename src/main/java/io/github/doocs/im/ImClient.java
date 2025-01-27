package io.github.doocs.im;

import io.github.doocs.im.core.*;
import io.github.doocs.im.util.SigUtil;

import java.util.concurrent.ThreadLocalRandom;


/**
 * @author hyh
 * @since 2021/07/29 16:11
 */
public class ImClient {
    private final long sdkAppId;
    private final String userId;
    private final String userSig;
    private final ClientConfiguration config;

    private static final String VERSION = "v4";
    private static final String FORMAT_URL = "https://console.tim.qq.com/%s/%s/%s?sdkappid=%d&identifier=%s&usersig=%s&random=%d&contenttype=json";

    public final Account account;
    public final Message message;
    public final Member member;
    public final Profile profile;
    public final Group group;
    public final Sns sns;
    public final Operation operation;
    public final RecentContact recentContact;

    private static final ClientConfiguration DEFAULT_CONFIG = new ClientConfiguration();

    public static ImClient getInstance(long sdkAppId, String userId, String key) {
        return new ImClient(sdkAppId, userId, key);
    }

    public static ImClient getInstance(long sdkAppId, String userId, String key, ClientConfiguration config) {
        return new ImClient(sdkAppId, userId, key, config);
    }

    public ImClient(long sdkAppId, String userId, String key) {
        this(sdkAppId, userId, key, DEFAULT_CONFIG);
    }

    public ImClient(long sdkAppId, String userId, String key, ClientConfiguration config) {
        this.sdkAppId = sdkAppId;
        this.userId = userId;
        this.config = config;
        this.userSig = SigUtil.genUserSig(sdkAppId, key, userId, config.getExpireTime());

        account = new Account(this);
        message = new Message(this);
        member = new Member(this);
        profile = new Profile(this);
        group = new Group(this);
        operation = new Operation(this);
        sns = new Sns(this);
        recentContact = new RecentContact(this);
    }

    public ClientConfiguration getConfig() {
        return config;
    }

    public String getUrl(String serviceName, String command) {
        long random = ThreadLocalRandom.current().nextLong(0, 0x100000000L);
        return String.format(FORMAT_URL, VERSION, serviceName, command,
                sdkAppId, userId, userSig, random);
    }
}
